<template>
  <div>
    <div class="mb-6">
      <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">Dashboard</h1>
      <p class="text-body-2 text-grey-darken-1">Последние покупки</p>
    </div>

    <!-- Recent Purchases -->
    <v-table class="data-table mb-6">
      <thead>
        <tr>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Пользователь</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Курс</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Сумма</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Статус</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Дата</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="purchase in recentPurchases" :key="purchase.id">
          <td class="font-weight-medium" style="color: #020617;">{{ purchase.user }}</td>
          <td class="text-grey-darken-2">{{ purchase.course }}</td>
          <td class="font-weight-medium" style="color: #020617;">{{ purchase.amount }}</td>
          <td>
            <v-chip
              :color="purchase.status === 'Оплачено' ? 'green-darken-3' : 'grey-lighten-1'"
              text-color="white"
              size="x-small"
              label
            >
              {{ purchase.status }}
            </v-chip>
          </td>
          <td class="text-grey-darken-2">{{ purchase.date }}</td>
        </tr>
      </tbody>
    </v-table>

    <!-- Quick Actions -->
    <h2 class="text-h6 font-weight-bold mb-4" style="color: #020617;">Быстрые действия</h2>

    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card
          class="action-card"
          elevation="0"
          @click="$router.push('/admin/courses')"
        >
          <v-icon size="32" color="grey-darken-3" class="mb-3">mdi-book-open-variant</v-icon>
          <p class="text-body-2 font-weight-medium mb-1" style="color: #020617;">Курсы</p>
          <p class="text-caption text-grey-darken-1">Управление курсами</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card
          class="action-card"
          elevation="0"
          @click="$router.push('/admin/users')"
        >
          <v-icon size="32" color="grey-darken-3" class="mb-3">mdi-account-group</v-icon>
          <p class="text-body-2 font-weight-medium mb-1" style="color: #020617;">Пользователи</p>
          <p class="text-caption text-grey-darken-1">Список учеников</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card
          class="action-card"
          elevation="0"
          @click="$router.push('/admin/purchases')"
        >
          <v-icon size="32" color="grey-darken-3" class="mb-3">mdi-cart-outline</v-icon>
          <p class="text-body-2 font-weight-medium mb-1" style="color: #020617;">Покупки</p>
          <p class="text-caption text-grey-darken-1">История платежей</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const recentPurchases = ref([])
const loading = ref(true)

// Загрузка последних покупок из БД
onMounted(async () => {
  try {
    const data = await $fetch('/api/admin/purchases/recent')
    if (data.success) {
      recentPurchases.value = data.purchases.map(p => ({
        id: p.id,
        user: p.userName || p.userEmail || 'Неизвестно',
        course: p.courseTitle || 'Неизвестный курс',
        amount: p.amount ? `${p.amount.toLocaleString('ru-RU')} ₽` : '—',
        status: p.status === 'completed' ? 'Оплачено' : 'В обработке',
        date: p.createdAt ? new Date(p.createdAt).toLocaleDateString('ru-RU') : '—',
      }))
    }
  } catch (e) {
    console.error('Ошибка загрузки покупок:', e)
  } finally {
    loading.value = false
  }
})

useSeoMeta({
  title: 'Dashboard — Админка',
})
</script>

<style scoped>
.data-table {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
}

.data-table :deep(th) {
  border-bottom: 1px solid #E2E8F0;
  padding: 12px 16px;
}

.data-table :deep(td) {
  padding: 12px 16px;
  border-bottom: 1px solid #F1F5F9;
}

.data-table :deep(tr:last-child td) {
  border-bottom: none;
}

.action-card {
  border:1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.action-card:hover {
  border-color: #00DC82;
}
</style>
