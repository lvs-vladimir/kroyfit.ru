<template>
  <div>
    <div class="d-flex align-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">Пользователи</h1>
        <p class="text-body-2 text-grey-darken-1">Управление учениками</p>
      </div>
      <v-spacer />
      <v-btn
        color="green-darken-3"
        variant="flat"
        size="small"
        style="border-radius: 8px;"
        @click="showCreateDialog = true"
      >
        <v-icon start size="18">mdi-plus</v-icon>
        Создать
      </v-btn>
    </div>

    <v-table class="data-table">
      <thead>
        <tr>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Имя</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Email</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">VK</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Курсов</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Дата</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>
              <nuxt-link
                :to="`/admin/users/${user.id}`"
                class="text-decoration-none font-weight-medium"
                style="color: #020617;"
              >
                {{ user.name }}
              </nuxt-link>
            </td>
            <td class="text-grey-darken-2">{{ user.email }}</td>
            <td>
              <a
                v-if="user.vk"
                :href="`https://vk.com/id${user.vk}`"
                target="_blank"
                class="text-decoration-none text-grey-darken-2"
              >
                VK {{ user.vk }}
              </a>
              <span v-else class="text-grey-lighten-1">—</span>
            </td>
            <td class="text-grey-darken-2">{{ user.coursesCount }}</td>
            <td class="text-grey-darken-2">{{ user.registered }}</td>
          </tr>
      </tbody>
    </v-table>

    <!-- Create User Dialog -->
    <v-dialog v-model="showCreateDialog" max-width="500">
      <v-card style="border-radius: 12px;">
        <v-card-title class="pa-6 pb-2">
          <h2 class="text-h6 font-weight-bold" style="color: #020617;">Создание пользователя</h2>
        </v-card-title>
        <v-card-text class="pa-6 pt-2">
          <v-form @submit.prevent="createUser">
            <div class="mb-4">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Имя</label>
              <v-text-field
                v-model="newUser.name"
                placeholder="Имя пользователя"
                variant="outlined"
                density="compact"
                hide-details
              />
            </div>
            <div class="mb-4">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Email</label>
              <v-text-field
                v-model="newUser.email"
                type="email"
                placeholder="email@example.com"
                variant="outlined"
                density="compact"
                hide-details
              />
            </div>
            <div class="mb-4">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Пароль</label>
              <v-text-field
                v-model="newUser.password"
                type="password"
                placeholder="••••••••"
                variant="outlined"
                density="compact"
                hide-details
              />
            </div>
            <div class="mb-4">
              <label class="text-caption text-grey-darken-1 d-block mb-1">VK ID</label>
              <v-text-field
                v-model="newUser.vk"
                placeholder="123456789"
                variant="outlined"
                density="compact"
                hide-details
              />
            </div>
            <div class="d-flex ga-2 mt-2">
              <v-btn
                type="submit"
                color="green-darken-3"
                variant="flat"
                :loading="saving"
                style="border-radius: 8px;"
              >
                Создать
              </v-btn>
              <v-btn
                variant="text"
                color="grey-darken-2"
                @click="showCreateDialog = false"
              >
                Отмена
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const users = ref([
  { id: '1', name: 'Анна Иванова', email: 'anna@example.com', vk: '123456', coursesCount: 2, registered: '15.03.2026' },
  { id: '2', name: 'Мария Петрова', email: 'maria@example.com', vk: '', coursesCount: 1, registered: '22.03.2026' },
  { id: '3', name: 'Елена Сидорова', email: 'elena@example.com', vk: '987654', coursesCount: 3, registered: '01.04.2026' },
])

const showCreateDialog = ref(false)
const saving = ref(false)

const newUser = reactive({
  name: '',
  email: '',
  password: '',
  vk: '',
})

const createUser = async () => {
  saving.value = true
  try {
    const user = {
      id: String(Date.now()),
      name: newUser.name,
      email: newUser.email,
      vk: newUser.vk,
      coursesCount: 0,
      registered: new Date().toLocaleDateString('ru-RU'),
    }
    users.value.push(user)
    showCreateDialog.value = false
    newUser.name = ''
    newUser.email = ''
    newUser.password = ''
    newUser.vk = ''
  } finally {
    saving.value = false
  }
}

useSeoMeta({
  title: 'Пользователи — Админка',
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

.ga-2 {
  gap: 8px;
}
</style>
