<template>
  <div>
    <div class="mb-6">
      <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">Покупки</h1>
      <p class="text-body-2 text-grey-darken-1">История покупок и платежей</p>
    </div>

    <v-table class="data-table">
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
        <tr v-for="purchase in purchases" :key="purchase.id">
          <td class="font-weight-medium" style="color: #020617;">{{ purchase.user }}</td>
          <td class="text-grey-darken-2">{{ purchase.course }}</td>
          <td class="font-weight-medium" style="color: #020617;">{{ purchase.amount }}</td>
          <td>
            <v-chip
              :color="purchase.status === 'Оплачено' ? 'grey-darken-4' : 'grey-lighten-1'"
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
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const purchases = ref([
  { id: '1', user: 'Анна Иванова', course: 'Технология пошива', amount: '15 000 ₽', status: 'Оплачено', date: '15.03.2026' },
  { id: '2', user: 'Мария Петрова', course: 'Дамское бельё', amount: '12 000 ₽', status: 'Оплачено', date: '22.03.2026' },
  { id: '3', user: 'Елена Сидорова', course: 'Мастер конструирования', amount: '25 000 ₽', status: 'Оплачено', date: '01.04.2026' },
])

useSeoMeta({
  title: 'Покупки — Админка',
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
</style>
