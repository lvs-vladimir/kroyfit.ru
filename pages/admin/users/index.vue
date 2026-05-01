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
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Действия</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>
              <div class="d-flex align-center" style="gap: 12px;">
                <v-avatar 
                  v-if="user.avatar" 
                  :image="user.avatar" 
                  size="36"
                />
                <v-avatar 
                  v-else 
                  size="36"
                  style="background: #e0e0e0; color: #666; font-weight: 600;"
                >
                  {{ user.name?.charAt(0) || '?' }}
                </v-avatar>
                <nuxt-link
                  :to="`/admin/users/${user.id}`"
                  class="text-decoration-none font-weight-medium"
                  style="color: #020617;"
                >
                  {{ user.name }}
                </nuxt-link>
              </div>
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
            <td>
              <div class="d-flex ga-1">
                <v-btn
                  icon
                  size="x-small"
                  variant="text"
                  color="blue-darken-2"
                  @click="editUser(user)"
                  title="Редактировать"
                >
                  <v-icon size="18">mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="x-small"
                  variant="text"
                  color="red-darken-2"
                  @click="confirmDelete(user)"
                  title="Удалить"
                >
                  <v-icon size="18">mdi-trash-can</v-icon>
                </v-btn>
              </div>
            </td>
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

    <!-- Edit User Dialog -->
    <v-dialog v-model="showEditDialog" max-width="500">
      <v-card style="border-radius: 12px;">
        <v-card-title class="pa-6 pb-2">
          <h2 class="text-h6 font-weight-bold" style="color: #020617;">Редактирование пользователя</h2>
        </v-card-title>
        <v-card-text class="pa-6 pt-2">
          <v-form @submit.prevent="saveEditedUser">
            <div class="mb-4">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Имя</label>
              <v-text-field
                v-model="editingUser.name"
                placeholder="Имя пользователя"
                variant="outlined"
                density="compact"
                hide-details
              />
            </div>
            <div class="mb-4">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Email</label>
              <v-text-field
                v-model="editingUser.email"
                type="email"
                placeholder="email@example.com"
                variant="outlined"
                density="compact"
                hide-details
              />
            </div>
            <div class="mb-4">
              <label class="text-caption text-grey-darken-1 d-block mb-1">VK ID</label>
              <v-text-field
                v-model="editingUser.vk"
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
                Сохранить
              </v-btn>
              <v-btn
                variant="text"
                color="grey-darken-2"
                @click="showEditDialog = false"
              >
                Отмена
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="showDeleteDialog" max-width="400">
      <v-card style="border-radius: 12px;">
        <v-card-title class="pa-6 pb-2">
          <h2 class="text-h6 font-weight-bold" style="color: #020617;">Удалить пользователя?</h2>
        </v-card-title>
        <v-card-text class="pa-6 pt-2">
          <p class="text-body-2 text-grey-darken-2 mb-4">
            Вы уверены, что хотите удалить пользователя <strong>{{ userToDelete?.name }}</strong>?
          </p>
          <p class="text-caption text-grey-darken-1">
            Это действие нельзя отменить.
          </p>
        </v-card-text>
        <v-card-actions class="pa-6 pt-2">
          <v-spacer />
          <v-btn
            variant="text"
            color="grey-darken-2"
            @click="showDeleteDialog = false"
          >
            Отмена
          </v-btn>
          <v-btn
            color="red-darken-2"
            variant="flat"
            :loading="deleting"
            @click="deleteUser"
            style="border-radius: 8px;"
          >
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const users = ref([])
const loading = ref(true)

// Загрузка пользователей из БД
onMounted(async () => {
  try {
    const data = await $fetch('/api/users')
    if (data.success) {
      users.value = data.users.map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        avatar: u.avatar || null,
        vk: u.vkId || '',
        coursesCount: u.coursesCount || 0,
        registered: u.createdAt ? new Date(u.createdAt).toLocaleDateString('ru-RU') : '—',
      }))
    }
  } catch (e) {
    console.error('Ошибка загрузки пользователей:', e)
  } finally {
    loading.value = false
  }
})

const showCreateDialog = ref(false)
const showEditDialog = ref(false)
const showDeleteDialog = ref(false)
const saving = ref(false)
const deleting = ref(false)

const newUser = reactive({
  name: '',
  email: '',
  password: '',
  vk: '',
})

const editingUser = reactive({
  id: '',
  name: '',
  email: '',
  vk: '',
})

const userToDelete = ref(null)

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

const editUser = (user) => {
  editingUser.id = user.id
  editingUser.name = user.name
  editingUser.email = user.email
  editingUser.vk = user.vk
  showEditDialog.value = true
}

const saveEditedUser = async () => {
  saving.value = true
  try {
    console.log('📝 [Frontend] Сохранение пользователя:', editingUser)
    
    const response = await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'user-update',
        data: {
          id: editingUser.id,
          name: editingUser.name,
          email: editingUser.email,
          vkId: editingUser.vk,
        },
      },
    })
    
    console.log('✅ [Frontend] Пользователь обновлен:', response.user.id)
    
    // Обновляем пользователя в списке
    const index = users.value.findIndex(u => u.id === editingUser.id)
    if (index !== -1) {
      users.value[index].name = editingUser.name
      users.value[index].email = editingUser.email
      users.value[index].vk = editingUser.vk
    }
    
    showEditDialog.value = false
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить пользователя'))
  } finally {
    saving.value = false
  }
}

const confirmDelete = (user) => {
  userToDelete.value = user
  showDeleteDialog.value = true
}

const deleteUser = async () => {
  if (!userToDelete.value) return
  
  deleting.value = true
  try {
    console.log('🗑️ [Frontend] Удаление пользователя:', userToDelete.value.id)
    
    const response = await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'user-delete',
        data: {
          id: userToDelete.value.id,
        },
      },
    })
    
    console.log('✅ [Frontend] Пользователь удален:', userToDelete.value.id)
    
    // Удаляем пользователя из списка
    users.value = users.value.filter(u => u.id !== userToDelete.value.id)
    
    showDeleteDialog.value = false
    userToDelete.value = null
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка удаления:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось удалить пользователя'))
  } finally {
    deleting.value = false
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
