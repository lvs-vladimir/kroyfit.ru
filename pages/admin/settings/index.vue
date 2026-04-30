<template>
  <div>
    <div class="mb-6">
      <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">Настройки</h1>
      <p class="text-body-2 text-grey-darken-1">Конфигурация системы</p>
    </div>

    <v-card class="settings-card" elevation="0">
      <v-tabs v-model="activeTab" color="green-darken-3" grow>
        <v-tab value="profile">Профиль</v-tab>
        <v-tab value="roles">Роли</v-tab>
        <v-tab value="admins">Администраторы</v-tab>
        <v-tab value="vk">ВКонтакте</v-tab>
        <v-tab value="email">Email</v-tab>
        <v-tab value="seo">SEO</v-tab>
        <v-tab value="general">Общие</v-tab>
      </v-tabs>

      <v-divider />

      <v-window v-model="activeTab">
        <!-- Profile Tab -->
        <v-window-item value="profile" class="pa-6">
          <h2 class="text-h6 font-weight-bold mb-6" style="color: #020617;">Мой профиль</h2>
          <v-row>
            <v-col cols="12" md="6">
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Email</label>
                <v-text-field v-model="profile.email" type="email" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Имя</label>
                <v-text-field v-model="profile.name" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-6">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Новый пароль</label>
                <v-text-field v-model="profile.password" type="password" variant="outlined" density="compact" hide-details />
              </div>
              <v-alert v-if="profileMessage" :type="profileMessage.type" variant="tonal" density="compact" class="mb-4">
                {{ profileMessage.text }}
              </v-alert>
              <v-btn color="green-darken-3" variant="flat" @click="saveProfile" :loading="profile.saving">
                Сохранить профиль
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- Roles Tab -->
        <v-window-item value="roles" class="pa-6">
          <div class="d-flex align-center mb-6">
            <div>
              <h2 class="text-h6 font-weight-bold mb-1" style="color: #020617;">Роли и разрешения</h2>
            </div>
            <v-spacer />
            <v-btn color="green-darken-3" variant="flat" size="small" @click="showAddRoleDialog = true">
              <v-icon start size="18">mdi-plus</v-icon>
              Добавить роль
            </v-btn>
          </div>

          <v-row>
            <v-col v-for="role in roles" :key="role.id" cols="12" md="6">
              <v-card class="pa-4" style="border: 1px solid #E2E8F0; border-radius: 12px;">
                <div class="d-flex align-center mb-4">
                  <div class="flex-grow-1">
                    <h3 class="text-subtitle-1 font-weight-bold mb-1" style="color: #020617;">{{ role.name }}</h3>
                    <p class="text-caption text-grey-darken-1 mb-0">{{ role.description }}</p>
                  </div>
                  <v-btn icon size="small" variant="text" color="grey-darken-2" @click="editRole(role)">
                    <v-icon size="18">mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon size="small" variant="text" color="red" @click="deleteRole(role.id)">
                    <v-icon size="18">mdi-delete</v-icon>
                  </v-btn>
                </div>
                <v-divider class="my-3" />
                <div class="permissions-list">
                  <div class="permission-item">
                    <v-icon :color="role.canViewDashboard ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canViewDashboard ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Dashboard</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageCourses ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageCourses ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Курсы</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageUsers ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageUsers ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Пользователи</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManagePurchases ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManagePurchases ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Покупки</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageSettings ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageSettings ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Настройки</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageAdmins ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageAdmins ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Администраторы</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canEditPlan ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canEditPlan ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">План</span>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-dialog v-model="showAddRoleDialog" max-width="600">
            <v-card style="border-radius: 12px;">
              <v-card-title class="pa-6 pb-2">
                <h2 class="text-h6 font-weight-bold">{{ editingRole ? 'Редактирование' : 'Добавление' }} роли</h2>
              </v-card-title>
              <v-card-text class="pa-6">
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Название роли</label>
                  <v-text-field v-model="newRole.name" variant="outlined" density="compact" hide-details />
                </div>
                <div class="mb-6">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Описание</label>
                  <v-textarea v-model="newRole.description" variant="outlined" density="compact" rows="2" hide-details />
                </div>
                <h3 class="text-subtitle-2 font-weight-bold mb-3">Разрешения</h3>
                <v-checkbox v-model="newRole.canViewDashboard" label="Dashboard" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageCourses" label="Курсы" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageUsers" label="Пользователи" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManagePurchases" label="Покупки" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageSettings" label="Настройки" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageAdmins" label="Администраторы" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canEditPlan" label="План" hide-details class="mb-6" color="green-darken-3" />
                <div class="d-flex ga-2">
                  <v-btn color="green-darken-3" variant="flat" @click="saveRole" :loading="roleSaving">
                    {{ editingRole ? 'Обновить' : 'Создать' }}
                  </v-btn>
                  <v-btn variant="text" color="grey-darken-2" @click="showAddRoleDialog = false">
                    Отмена
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-window-item>

        <!-- Admins Tab -->
        <v-window-item value="admins" class="pa-6">
          <div class="d-flex align-center mb-6">
            <h2 class="text-h6 font-weight-bold mb-0" style="color: #020617;">Администраторы</h2>
            <v-spacer />
            <v-btn color="green-darken-3" variant="flat" size="small" @click="showAddAdminDialog = true">
              <v-icon start size="18">mdi-plus</v-icon>
              Добавить
            </v-btn>
          </div>
          <v-table class="data-table">
            <thead>
              <tr>
                <th class="text-left">Email</th>
                <th class="text-left">Имя</th>
                <th class="text-left">Роль</th>
                <th class="text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="admin in admins" :key="admin.id">
                <td class="font-weight-medium">{{ admin.email }}</td>
                <td>{{ admin.name }}</td>
                <td>
                  <v-chip size="small" color="blue">
                    {{ getRoleName(admin.roleId) }}
                  </v-chip>
                </td>
                <td>
                  <v-btn icon size="small" variant="text" color="grey-darken-2" @click="editAdmin(admin)">
                    <v-icon size="18">mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon size="small" variant="text" color="red" @click="deleteAdmin(admin.id)">
                    <v-icon size="18">mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-dialog v-model="showAddAdminDialog" max-width="500">
            <v-card style="border-radius: 12px;">
              <v-card-title class="pa-6 pb-2">
                <h2 class="text-h6 font-weight-bold">{{ editingAdmin ? 'Редактирование' : 'Добавление' }} администратора</h2>
              </v-card-title>
              <v-card-text class="pa-6">
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Email</label>
                  <v-text-field v-model="newAdmin.email" type="email" variant="outlined" density="compact" hide-details />
                </div>
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Имя</label>
                  <v-text-field v-model="newAdmin.name" variant="outlined" density="compact" hide-details />
                </div>
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Роль</label>
                  <v-select v-model="newAdmin.roleId" :items="roles" item-title="name" item-value="id" variant="outlined" density="compact" hide-details />
                </div>
                <div class="d-flex ga-2">
                  <v-btn color="green-darken-3" variant="flat" @click="saveAdmin" :loading="adminSaving">
                    {{ editingAdmin ? 'Обновить' : 'Создать' }}
                  </v-btn>
                  <v-btn variant="text" color="grey-darken-2" @click="showAddAdminDialog = false">
                    Отмена
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-window-item>

        <!-- VK Tab -->
        <v-window-item value="vk" class="pa-6">
          <div class="d-flex align-center mb-6">
            <h2 class="text-h6 font-weight-bold mb-0" style="color: #020617;">ВКонтакте</h2>
            <v-spacer />
            <v-btn color="green-darken-3" variant="flat" size="small" @click="showAddVkDialog = true">
              <v-icon start size="18">mdi-plus</v-icon>
              Добавить группу
            </v-btn>
          </div>
          <v-row>
            <v-col v-for="group in vkGroups" :key="group.id" cols="12" md="6">
              <v-card class="pa-4" style="border: 1px solid #E2E8F0; border-radius: 12px;">
                <div class="d-flex align-center mb-4">
                  <v-icon color="blue" class="mr-3">mdi-vk</v-icon>
                  <div class="flex-grow-1">
                    <h3 class="text-subtitle-1 font-weight-bold mb-0" style="color: #020617;">{{ group.name }}</h3>
                  </div>
                  <v-btn icon size="small" variant="text" color="grey-darken-2" @click="editVkGroup(group)">
                    <v-icon size="18">mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon size="small" variant="text" color="red" @click="deleteVkGroup(group.id)">
                    <v-icon size="18">mdi-delete</v-icon>
                  </v-btn>
                </div>
                <div class="mb-3">
                  <p class="text-caption text-grey-darken-1 mb-1">ID группы: {{ group.vkId }}</p>
                  <p class="text-caption text-grey-darken-1">Курс: {{ group.courseSlug }}</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-dialog v-model="showAddVkDialog" max-width="500">
            <v-card style="border-radius: 12px;">
              <v-card-title class="pa-6 pb-2">
                <h2 class="text-h6 font-weight-bold">{{ editingVkGroup ? 'Редактирование' : 'Добавление' }} VK группы</h2>
              </v-card-title>
              <v-card-text class="pa-6">
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Название группы</label>
                  <v-text-field v-model="newVkGroup.name" variant="outlined" density="compact" hide-details />
                </div>
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">ID группы ВК</label>
                  <v-text-field v-model="newVkGroup.vkId" variant="outlined" density="compact" hide-details />
                </div>
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Курс</label>
                  <v-select v-model="newVkGroup.courseSlug" :items="['tekhnologiya-poshiva', 'master-konstruirovaniya', 'damskoe-bele']" variant="outlined" density="compact" hide-details />
                </div>
                <div class="mb-6">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Токен сообщества</label>
                  <v-text-field v-model="newVkGroup.token" type="password" variant="outlined" density="compact" hide-details />
                </div>
                <div class="d-flex ga-2">
                  <v-btn color="green-darken-3" variant="flat" @click="saveVkGroup" :loading="vkSaving">
                    {{ editingVkGroup ? 'Обновить' : 'Добавить' }}
                  </v-btn>
                  <v-btn variant="text" color="grey-darken-2" @click="showAddVkDialog = false">
                    Отмена
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-window-item>

        <!-- Email Tab -->
        <v-window-item value="email" class="pa-6">
          <h2 class="text-h6 font-weight-bold mb-6" style="color: #020617;">Email уведомления</h2>
          <v-row>
            <v-col cols="12" md="6">
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">SMTP Host</label>
                <v-text-field v-model="email.smtpHost" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">SMTP Port</label>
                <v-text-field v-model.number="email.smtpPort" type="number" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Email</label>
                <v-text-field v-model="email.smtpUser" type="email" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Пароль</label>
                <v-text-field v-model="email.smtpPass" type="password" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-6">
                <label class="text-caption text-grey-darken-1 d-block mb-1">From Email</label>
                <v-text-field v-model="email.smtpFrom" variant="outlined" density="compact" hide-details />
              </div>
              <v-checkbox v-model="email.enableWelcome" label="Приветственное письмо" hide-details class="mb-2" color="green-darken-3" />
              <v-checkbox v-model="email.enablePurchase" label="Письмо при покупке" hide-details class="mb-2" color="green-darken-3" />
              <v-checkbox v-model="email.enableVkGroup" label="Письмо при добавлении в VK" hide-details class="mb-6" color="green-darken-3" />
              <v-btn color="green-darken-3" variant="flat" @click="saveEmail" :loading="email.saving">
                Сохранить
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- SEO Tab -->
        <v-window-item value="seo" class="pa-6">
          <h2 class="text-h6 font-weight-bold mb-6" style="color: #020617;">SEO оптимизация</h2>
          <v-row>
            <v-col cols="12" md="6">
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Заголовок сайта</label>
                <v-text-field v-model="seo.title" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Описание</label>
                <v-textarea v-model="seo.description" variant="outlined" density="compact" rows="3" hide-details />
              </div>
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Ключевые слова</label>
                <v-text-field v-model="seo.keywords" variant="outlined" density="compact" hide-details />
              </div>
              <v-checkbox v-model="seo.enableSitemap" label="Включить sitemap.xml" hide-details class="mb-2" color="green-darken-3" />
              <v-checkbox v-model="seo.enableRobots" label="Включить robots.txt" hide-details class="mb-6" color="green-darken-3" />
              <v-btn color="green-darken-3" variant="flat" @click="saveSeo" :loading="seo.saving">
                Сохранить
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- General Tab -->
        <v-window-item value="general" class="pa-6">
          <h2 class="text-h6 font-weight-bold mb-6" style="color: #020617;">Общие настройки</h2>
          <v-row>
            <v-col cols="12" md="6">
              <div class="mb-4">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Название сайта</label>
                <v-text-field v-model="general.siteName" variant="outlined" density="compact" hide-details />
              </div>
              <div class="mb-6">
                <label class="text-caption text-grey-darken-1 d-block mb-1">Email администратора</label>
                <v-text-field v-model="general.adminEmail" variant="outlined" density="compact" hide-details />
              </div>
              <v-btn color="green-darken-3" variant="flat" @click="saveGeneral" :loading="general.saving">
                Сохранить
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const activeTab = ref('profile')
const showAddRoleDialog = ref(false)
const showAddAdminDialog = ref(false)
const showAddVkDialog = ref(false)
const editingRole = ref(null)
const editingAdmin = ref(null)
const editingVkGroup = ref(null)
const roleSaving = ref(false)
const adminSaving = ref(false)
const vkSaving = ref(false)
const profileMessage = ref(null)

const profile = ref({
  email: 'admin@kroyfit.ru',
  name: 'Администратор',
  password: '',
  saving: false,
})

const roles = ref([
  { 
    id: '1', 
    name: 'Администратор', 
    description: 'Полный доступ ко всем функциям',
    canViewDashboard: true,
    canManageCourses: true,
    canManageUsers: true,
    canManagePurchases: true,
    canManageSettings: true,
    canManageAdmins: true,
    canEditPlan: true,
  },
  { 
    id: '2', 
    name: 'Модератор', 
    description: 'Управление курсами и пользователями',
    canViewDashboard: true,
    canManageCourses: true,
    canManageUsers: true,
    canManagePurchases: true,
    canManageSettings: false,
    canManageAdmins: false,
    canEditPlan: false,
  },
  { 
    id: '3', 
    name: 'Редактор', 
    description: 'Редактирование контента',
    canViewDashboard: true,
    canManageCourses: true,
    canManageUsers: false,
    canManagePurchases: false,
    canManageSettings: false,
    canManageAdmins: false,
    canEditPlan: true,
  },
])

const admins = ref([
  { id: '1', email: 'admin@kroyfit.ru', name: 'Администратор', roleId: '1' },
])

const vkGroups = ref([
  { id: '1', name: 'Генетика Кроя — Технология пошива', vkId: '', courseSlug: 'tekhnologiya-poshiva' },
])

const email = reactive({
  smtpHost: 'smtp.gmail.com',
  smtpPort: 587,
  smtpUser: '',
  smtpPass: '',
  smtpFrom: 'noreply@kroyfit.ru',
  enableWelcome: true,
  enablePurchase: true,
  enableVkGroup: true,
  saving: false,
})

const seo = reactive({
  title: 'Генетика Кроя',
  description: 'Курсы кройки и шитья',
  keywords: 'кройка, шитье, курсы',
  enableSitemap: true,
  enableRobots: true,
  saving: false,
})

const general = reactive({
  siteName: 'Генетика Кроя',
  adminEmail: 'admin@kroyfit.ru',
  saving: false,
})

const newRole = reactive({
  name: '',
  description: '',
  canViewDashboard: false,
  canManageCourses: false,
  canManageUsers: false,
  canManagePurchases: false,
  canManageSettings: false,
  canManageAdmins: false,
  canEditPlan: false,
})

const newAdmin = reactive({
  email: '',
  name: '',
  roleId: '1',
})

const newVkGroup = reactive({
  name: '',
  vkId: '',
  courseSlug: '',
  token: '',
})

const getRoleName = (roleId: string) => roles.value.find(r => r.id === roleId)?.name || 'Неизвестная роль'

const saveProfile = async () => {
  profile.value.saving = true
  profileMessage.value = null
  console.log('🟢 [Frontend] Начинаю сохранение профиля...')
  console.log('📝 [Frontend] Данные:', { email: profile.value.email, name: profile.value.name, hasPassword: !!profile.value.password })
  
  try {
    console.log('🔵 [Frontend] Отправляю запрос на /api/admin/settings...')
    const response = await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'profile',
        data: {
          adminId: '1',
          email: profile.value.email,
          name: profile.value.name,
          password: profile.value.password,
        },
      },
    })

    console.log('✅ [Frontend] Ответ от сервера:', response)
    
    // Загружаем обновленный профиль из БД
    console.log('🔄 [Frontend] Загружаю обновленный профиль из БД...')
    const profileData = await $fetch('/api/admin/profile')
    console.log('✅ [Frontend] Профиль загружен из БД:', profileData.admin)
    
    // Обновляем локальные данные реактивно через ref
    console.log('🔄 [Frontend] Обновляю локальные данные реактивно...')
    profile.value.email = profileData.admin.email
    profile.value.name = profileData.admin.name
    profile.value.password = ''
    console.log('✅ [Frontend] Локальные данные обновлены:', { email: profile.value.email, name: profile.value.name })
    
    profileMessage.value = { type: 'success', text: 'Профиль успешно обновлен! Данные сохранены в БД.' }
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка при сохранении:', e)
    profileMessage.value = { type: 'error', text: e.data?.message || 'Ошибка сохранения профиля' }
  } finally {
    profile.value.saving = false
  }
}

const editRole = (role: any) => {
  editingRole.value = role
  Object.assign(newRole, role)
  showAddRoleDialog.value = true
}

const saveRole = async () => {
  roleSaving.value = true
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: { type: 'role', data: { id: editingRole.value?.id || null, name: newRole.name, description: newRole.description, permissions: newRole } },
    })
    if (editingRole.value) Object.assign(editingRole.value, newRole)
    else roles.value.push({ id: String(Date.now()), ...newRole })
    showAddRoleDialog.value = false
    editingRole.value = null
    Object.assign(newRole, { name: '', description: '', canViewDashboard: false, canManageCourses: false, canManageUsers: false })
  } finally {
    roleSaving.value = false
  }
}

const deleteRole = (id: string) => {
  if (confirm('Удалить роль?')) roles.value = roles.value.filter(r => r.id !== id)
}

const editAdmin = (admin: any) => {
  editingAdmin.value = admin
  Object.assign(newAdmin, admin)
  showAddAdminDialog.value = true
}

const saveAdmin = async () => {
  adminSaving.value = true
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: { type: 'admin', data: { id: editingAdmin.value?.id || null, email: newAdmin.email, name: newAdmin.name, roleId: newAdmin.roleId } },
    })
    if (editingAdmin.value) Object.assign(editingAdmin.value, newAdmin)
    else admins.value.push({ id: String(Date.now()), ...newAdmin })
    showAddAdminDialog.value = false
    editingAdmin.value = null
    Object.assign(newAdmin, { email: '', name: '', roleId: '1' })
  } finally {
    adminSaving.value = false
  }
}

const deleteAdmin = (id: string) => {
  if (confirm('Удалить администратора?')) admins.value = admins.value.filter(a => a.id !== id)
}

const deleteVkGroup = (id: string) => {
  if (confirm('Удалить группу?')) vkGroups.value = vkGroups.value.filter(g => g.id !== id)
}

const editVkGroup = (group: any) => {
  editingVkGroup.value = group
  Object.assign(newVkGroup, group)
  showAddVkDialog.value = true
}

const saveVkGroup = async () => {
  vkSaving.value = true
  try {
    if (editingVkGroup.value) {
      Object.assign(editingVkGroup.value, newVkGroup)
    } else {
      vkGroups.value.push({ id: String(Date.now()), ...newVkGroup })
    }
    showAddVkDialog.value = false
    editingVkGroup.value = null
    Object.assign(newVkGroup, { name: '', vkId: '', courseSlug: '', token: '' })
  } finally {
    vkSaving.value = false
  }
}

const saveEmail = async () => {
  email.saving = true
  try {
    await new Promise(resolve => setTimeout(resolve, 500))
  } finally {
    email.saving = false
  }
}

const saveSeo = async () => {
  seo.saving = true
  try {
    await new Promise(resolve => setTimeout(resolve, 500))
  } finally {
    seo.saving = false
  }
}

const saveGeneral = async () => {
  general.saving = true
  try {
    await new Promise(resolve => setTimeout(resolve, 500))
  } finally {
    general.saving = false
  }
}

useSeoMeta({ title: 'Настройки — Админка' })

// Загружаем профиль и администраторов при монтировании компонента
onMounted(async () => {
  console.log('🟡 [Frontend] Компонент монтирован, загружаю данные из БД...')
  try {
    // Загружаем профиль
    const profileData = await $fetch('/api/admin/profile')
    console.log('✅ [Frontend] Профиль загружен:', profileData.admin)
    profile.value.email = profileData.admin.email
    profile.value.name = profileData.admin.name
    
    // Загружаем администраторов
    const adminsData = await $fetch('/api/admin/admins')
    console.log('✅ [Frontend] Администраторы загружены:', adminsData.admins)
    admins.value = adminsData.admins
    
    console.log('✅ [Frontend] Все данные обновлены в компоненте')
  } catch (e) {
    console.error('❌ [Frontend] Ошибка загрузки данных:', e)
  }
})
</script>

<style scoped>
.settings-card { border: 1px solid #E2E8F0; border-radius: 12px; }
.data-table { border: 1px solid #E2E8F0; border-radius: 12px; }
.data-table :deep(th) { border-bottom: 1px solid #E2E8F0; padding: 12px 16px; }
.data-table :deep(td) { padding: 12px 16px; border-bottom: 1px solid #F1F5F9; }
.permissions-list { display: flex; flex-direction: column; gap: 8px; }
.permission-item { display: flex; align-items: center; gap: 8px; }
.ga-2 { gap: 8px; }
</style>
