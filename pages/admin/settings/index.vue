<template>
  <div>
    <div class="mb-6">
      <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">Настройки</h1>
      <p class="text-body-2 text-grey-darken-1">Конфигурация системы</p>
    </div>

    <v-card class="settings-card" elevation="0">
      <v-tabs v-model="activeTab" color="green-darken-3" grow>
        <v-tab v-if="canManageProfile" value="profile">Профиль</v-tab>
        <v-tab v-if="canManageRoles" value="roles">Роли</v-tab>
        <v-tab v-if="canManageAdmins" value="admins">Администраторы</v-tab>
        <v-tab v-if="canManageVkGroups" value="vk">ВКонтакте</v-tab>
        <v-tab v-if="canManageEmail" value="email">Email</v-tab>
        <v-tab v-if="canManageSeo" value="seo">SEO</v-tab>
        <v-tab v-if="canManageGeneralSettings" value="general">Общие</v-tab>
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
                  <v-divider class="my-1" />
                  <div class="permission-item">
                    <v-icon :color="role.canManageProfile ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageProfile ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Профиль</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageRoles ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageRoles ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Роли</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageAdmins ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageAdmins ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Администраторы</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageVkGroups ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageVkGroups ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">ВКонтакте</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageEmail ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageEmail ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Email</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageSeo ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageSeo ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">SEO</span>
                  </div>
                  <div class="permission-item">
                    <v-icon :color="role.canManageGeneralSettings ? 'green-darken-3' : 'grey-lighten-1'" size="18">
                      {{ role.canManageGeneralSettings ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                    <span class="text-caption">Общие</span>
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
                <v-checkbox v-model="newRole.canManageAdmins" label="Администраторы" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canEditPlan" label="План" hide-details class="mb-2" color="green-darken-3" />
                <v-divider class="my-2" />
                <p class="text-caption text-grey-darken-1 mb-2">Вкладки настроек:</p>
                <v-checkbox v-model="newRole.canManageProfile" label="Профиль" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageRoles" label="Роли" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageAdmins" label="Администраторы" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageVkGroups" label="ВКонтакте" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageEmail" label="Email" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageSeo" label="SEO" hide-details class="mb-2" color="green-darken-3" />
                <v-checkbox v-model="newRole.canManageGeneralSettings" label="Общие настройки" hide-details class="mb-6" color="green-darken-3" />
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
                  <v-btn icon size="small" variant="text" color="orange-darken-2" @click="openChangePassword(admin)" title="Изменить пароль">
                    <v-icon size="18">mdi-key</v-icon>
                  </v-btn>
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
          
          <!-- Change Password Dialog -->
          <v-dialog v-model="showChangePasswordDialog" max-width="500">
            <v-card style="border-radius: 12px;">
              <v-card-title class="pa-6 pb-2">
                <h2 class="text-h6 font-weight-bold">Изменение пароля</h2>
              </v-card-title>
              <v-card-text class="pa-6">
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Администратор</label>
                  <v-text-field 
                    :model-value="selectedAdminForPassword?.email" 
                    variant="outlined" 
                    density="compact" 
                    hide-details 
                    disabled 
                  />
                </div>
                <div class="mb-6">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Новый пароль</label>
                  <v-text-field 
                    v-model="newPassword" 
                    type="password" 
                    variant="outlined" 
                    density="compact" 
                    hide-details 
                    placeholder="Минимум 6 символов"
                  />
                </div>
                <div class="d-flex ga-2">
                  <v-btn color="green-darken-3" variant="flat" @click="savePassword" :loading="passwordSaving">
                    Сохранить пароль
                  </v-btn>
                  <v-btn variant="text" color="grey-darken-2" @click="showChangePasswordDialog = false">
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
                  <p class="text-caption text-grey-darken-1 mb-1">
                    <a :href="`https://vk.com/${group.vkId}`" target="_blank" class="text-decoration-none" style="color: #1976d2;">
                      <v-icon size="14" color="blue">mdi-vk</v-icon>
                      vk.com/{{ group.vkId }}
                    </a>
                  </p>
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
                <!-- 1. Ссылка на группу ВК -->
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Ссылка на группу ВК</label>
                  <v-text-field 
                    v-model="newVkGroup.vkUrl" 
                    variant="outlined" 
                    density="compact" 
                    hide-details 
                    placeholder="https://vk.com/club123456 или https://vk.com/название"
                    @blur="extractVkId"
                    :loading="vkIdLoading"
                  />
                  <v-progress-linear v-if="vkIdLoading" indeterminate color="green-darken-3" class="mt-1" />
                  <div v-if="newVkGroup.vkId && !vkIdLoading" class="text-caption text-green-darken-3 mt-1">
                    <v-icon size="16" color="green-darken-3">mdi-check-circle</v-icon>
                    ID группы: {{ newVkGroup.vkId }}
                  </div>
                  <div v-if="vkIdError" class="text-caption mt-1" v-html="vkIdError" />
                  
                  <!-- Инструкция по добавлению группы -->
                  <v-expansion-panels variant="accordion" class="mt-3" style="border-radius: 8px;">
                    <v-expansion-panel>
                      <v-expansion-panel-title class="text-caption font-weight-medium" style="min-height: 40px;">
                        <template v-slot:default="{ expanded }">
                          <v-row no-gutters>
                            <v-col cols="12" class="d-flex align-center">
                              <v-icon size="16" class="mr-2" color="green-darken-3">mdi-help-circle-outline</v-icon>
                              Как правильно добавить группу?
                            </v-col>
                          </v-row>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <div class="text-caption text-grey-darken-1 py-2">
                          <p class="font-weight-medium mb-2">1. Вставьте ссылку на группу ВК</p>
                          <p class="mb-2 pl-4">Поддерживаются форматы:<br>
                          - vk.com/club123456<br>
                          - vk.com/public123456<br>
                          - vk.com/название_группы<br>
                          - Только ID: 123456</p>
                          
                          <p class="font-weight-medium mb-2">2. Получите токен сообщества (ключ доступа)</p>
                          <p class="mb-2 pl-4">
                            <a href="https://vk.com/dev/access_token" target="_blank" style="color: #1976d2;">Инструкция от VK →</a><br>
                            Или: Управление → Работа с API → Ключи доступа → Создать ключ
                          </p>
                          <p class="mb-2 pl-4 text-red-darken-2">
                            <v-icon size="14" color="red">mdi-alert</v-icon>
                            <strong>Важно:</strong> Токен должен иметь права:<br>
                            - Доступ к управлению сообществом<br>
                            - Доступ к приглашениям в группу
                          </p>
                          
                          <p class="font-weight-medium mb-2">3. Нажмите кнопку "Тест"</p>
                          <p class="mb-2 pl-4">Проверьте, что подключение работает.<br>
                          Если ошибка — проверьте токен и права доступа.</p>
                          
                          <p class="font-weight-medium mb-2">4. Выберите курс</p>
                          <p class="pl-4">После покупки этого курса, клиент автоматически получит приглашение в эту группу.</p>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>

                <!-- 2. Токен сообщества -->
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Токен сообщества</label>
                  <div class="d-flex ga-2">
                    <v-text-field 
                      v-model="newVkGroup.token" 
                      type="password" 
                      variant="outlined" 
                      density="compact" 
                      hide-details 
                      class="flex-grow-1"
                    />
                    <v-btn 
                      color="blue-darken-3" 
                      variant="flat" 
                      @click="testVkConnection"
                      :loading="vkTesting"
                      :disabled="!newVkGroup.token || !newVkGroup.vkId"
                      size="small"
                      style="height: 40px;"
                    >
                      <v-icon start>mdi-connection</v-icon>
                      Тест
                    </v-btn>
                  </div>
                  <div v-if="vkTestResult" class="mt-2">
                    <v-alert
                      :type="vkTestResult.success ? 'success' : 'error'"
                      variant="tonal"
                      density="compact"
                      class="text-caption"
                    >
                      {{ vkTestResult.message }}
                      <div v-if="vkTestResult.details" class="mt-1 text-grey-darken-1">
                        {{ vkTestResult.details }}
                      </div>
                    </v-alert>
                  </div>
                </div>

                <!-- 3. Название группы -->
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Название группы</label>
                  <v-text-field 
                    v-model="newVkGroup.name" 
                    variant="outlined" 
                    density="compact" 
                    hide-details 
                    placeholder="Заполнится автоматически после теста"
                    hint="Нажмите Тест для автозаполнения"
                    persistent-hint
                  />
                </div>

                <!-- 4. Курс -->
                <div class="mb-4">
                  <label class="text-caption text-grey-darken-1 d-block mb-1">Курс</label>
                  <v-select 
                    v-model="newVkGroup.courseSlug" 
                    :items="availableCourses" 
                    item-title="title" 
                    item-value="slug"
                    variant="outlined" 
                    density="compact" 
                    hide-details 
                    placeholder="Выберите курс"
                  />
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
const showChangePasswordDialog = ref(false)
const editingRole = ref(null)
const editingAdmin = ref(null)
const editingVkGroup = ref(null)

// Права текущего пользователя
const currentUser = ref({
  id: '',
  email: '',
  name: '',
  roleId: '',
})
const currentRole = ref({
  canManageProfile: false,
  canManageRoles: false,
  canManageAdmins: false,
  canManageVkGroups: false,
  canManageEmail: false,
  canManageSeo: false,
  canManageGeneralSettings: false,
  canManageSettings: false,
})

// Вычисляемые свойства для проверки прав на вкладки
// Каждая вкладка проверяет только своё специфическое право (независимо от canManageSettings)
const canManageProfile = computed(() => currentRole.value.canManageProfile)
const canManageRoles = computed(() => currentRole.value.canManageRoles)
const canManageAdmins = computed(() => currentRole.value.canManageAdmins)
const canManageVkGroups = computed(() => currentRole.value.canManageVkGroups)
const canManageEmail = computed(() => currentRole.value.canManageEmail)
const canManageSeo = computed(() => currentRole.value.canManageSeo)
const canManageGeneralSettings = computed(() => currentRole.value.canManageGeneralSettings)
const selectedAdminForPassword = ref(null)
const newPassword = ref('')
const passwordSaving = ref(false)
const roleSaving = ref(false)
const adminSaving = ref(false)
const availableCourses = ref([])

// Загрузка курсов для выбора
onMounted(async () => {
  try {
    const data = await $fetch('/api/courses')
    if (data.success) {
      availableCourses.value = data.courses.map(c => ({
        title: c.title,
        slug: c.slug,
      }))
    }
  } catch (e) {
    console.error('Ошибка загрузки курсов:', e)
  }
})

const vkSaving = ref(false)
const vkIdError = ref('')
const vkIdLoading = ref(false)
const vkTesting = ref(false)
const vkTestResult = ref<{success: boolean, message: string, details?: string} | null>(null)
const profileMessage = ref(null)

const profile = ref({
  email: '',
  name: '',
  password: '',
  saving: false,
})

const roles = ref([])

const admins = ref([])

const vkGroups = ref([])

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
  title: '',
  description: 'Курсы кройки и шитья',
  keywords: 'кройка, шитье, курсы',
  enableSitemap: true,
  enableRobots: true,
  saving: false,
})

const general = reactive({
  siteName: '',
  adminEmail: '',
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
  canManageProfile: false,
  canManageRoles: false,
  canManageVkGroups: false,
  canManageEmail: false,
  canManageSeo: false,
  canManageGeneralSettings: false,
})

const newAdmin = reactive({
  email: '',
  name: '',
  roleId: '1',
})

const newVkGroup = reactive({
  name: '',
  vkUrl: '',
  vkId: '',
  courseSlug: '',
  token: '',
})

const testVkConnection = async () => {
  if (!newVkGroup.vkId || !newVkGroup.token) {
    vkTestResult.value = {
      success: false,
      message: 'Заполните ID группы и токен'
    }
    return
  }
  
  vkTesting.value = true
  vkTestResult.value = null
  
  console.log('🧪 [Frontend] Тестирование подключения к VK API...')
  
  try {
    const response = await $fetch('/api/vk/test-connection', {
      method: 'POST',
      body: {
        vkId: newVkGroup.vkId,
        token: newVkGroup.token
      }
    }) as any
    
    if (response.success) {
      // Автоматически заполняем название группы, если оно пустое
      if (!newVkGroup.name && response.groupName) {
        newVkGroup.name = response.groupName
        console.log('✅ [Frontend] Название группы автоматически заполнено:', response.groupName)
      }
      
      vkTestResult.value = {
        success: true,
        message: '✅ Подключение успешно!',
        details: `Группа: ${response.groupName || newVkGroup.vkId}`
      }
      console.log('✅ [Frontend] Тест подключения пройден')
    } else {
      vkTestResult.value = {
        success: false,
        message: '❌ Ошибка подключения',
        details: response.error || 'Не удалось подключиться к VK API'
      }
      console.log('❌ [Frontend] Тест подключения не пройден:', response.error)
    }
  } catch (e: any) {
    const errorMsg = e.data?.message || e.message || 'Неизвестная ошибка'
    vkTestResult.value = {
      success: false,
      message: '❌ Ошибка тестирования',
      details: errorMsg
    }
    console.error('❌ [Frontend] Ошибка тестирования:', e)
  } finally {
    vkTesting.value = false
  }
}

const extractVkId = async () => {
  const url = newVkGroup.vkUrl.trim()
  if (!url) return
  
  console.log('🔍 [Frontend] Извлекаю ID из ссылки:', url)
  vkIdError.value = ''
  
  // Убираем протокол и www
  let cleanUrl = url.replace(/^https?:\/\//, '').replace(/^www\./, '')
  
  // Форматы:
  // vk.com/club123456 → 123456
  // vk.com/public123456 → 123456  
  // vk.com/ledstairs → ledstairs (короткое имя, нужно получить ID через API)
  // @club123456 → 123456
  
  let screenName = ''
  
  const match = cleanUrl.match(/(?:vk\.com\/)?(?:club|public|event)?(\d+)$/) ||
                cleanUrl.match(/(?:vk\.com\/)?([^\/\s]+)$/) ||
                cleanUrl.match(/^(@)?(club|public|event)?(\d+)$/) ||
                cleanUrl.match(/^(@)?(.+)$/)
  
  if (match) {
    if (match[1] && /^\d+$/.test(match[1])) {
      // Числовой ID найден сразу
      newVkGroup.vkId = match[1]
      console.log('✅ [Frontend] Извлечен числовой ID:', newVkGroup.vkId)
      // Пробуем получить название группы
      await fetchGroupName(match[1])
      return
    } else if (match[1]) {
      // Короткое имя - нужно получить ID через API
      screenName = match[1]
      console.log('🔄 [Frontend] Найдено короткое имя:', screenName)
    } else if (/^\d+$/.test(cleanUrl)) {
      newVkGroup.vkId = cleanUrl
      console.log('✅ [Frontend] ID из чисел:', newVkGroup.vkId)
      // Пробуем получить название группы
      await fetchGroupName(cleanUrl)
      return
    }
  }
  
  // Если это короткое имя - используем его напрямую (ID группы может быть числом или коротким именем)
  if (screenName && !/^\d+$/.test(screenName)) {
    newVkGroup.vkId = screenName
    console.log('✅ [Frontend] Используем короткое имя как ID:', screenName)
    vkIdError.value = ''
    // Подсказка пользователю что можно нажать Тест для проверки
    if (!newVkGroup.token) {
      vkIdError.value = `<span style="color: #1976d2;">Введите токен и нажмите "Тест" для проверки подключения</span>`
    }
  }
}

// Получение названия группы через VK API (используем тестовое подключение)
const fetchGroupName = async (groupId: string) => {
  // Пока не введен токен — не можем получить название
  if (!newVkGroup.token) {
    console.log('⚠️ [Frontend] Токен не введен — название группы не получено')
    return
  }
  
  try {
    console.log('🔍 [Frontend] Получение названия группы:', groupId)
    const response = await $fetch('/api/vk/test-connection', {
      method: 'POST',
      body: { 
        vkId: groupId,
        token: newVkGroup.token 
      }
    }) as any
    
    if (response.success && response.groupName) {
      newVkGroup.name = response.groupName
      console.log('✅ [Frontend] Название группы получено:', response.groupName)
    }
  } catch (e) {
    console.log('⚠️ [Frontend] Не удалось получить название группы:', e)
  }
}

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
  console.log('🟡 [Frontend] Сохранение роли...')
  try {
    const response = await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'role',
        data: {
          id: editingRole.value?.id || null,
          name: newRole.name,
          description: newRole.description,
          permissions: newRole,
        }
      },
    }) as any
    
    if (editingRole.value) {
      Object.assign(editingRole.value, newRole)
      console.log('✅ [Frontend] Роль обновлена')
    } else {
      const newId = response?.id || String(Date.now())
      roles.value.push({ id: newId, ...newRole })
      console.log('✅ [Frontend] Роль создана:', newId)
    }
    
    showAddRoleDialog.value = false
    editingRole.value = null
    Object.assign(newRole, { 
      name: '', 
      description: '', 
      canViewDashboard: false, 
      canManageCourses: false, 
      canManageUsers: false,
      canManagePurchases: false,
      canManageSettings: false,
      canManageAdmins: false,
      canEditPlan: false,
      canManageProfile: false,
      canManageRoles: false,
      canManageVkGroups: false,
      canManageEmail: false,
      canManageSeo: false,
      canManageGeneralSettings: false,
    })
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения роли:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить'))
  } finally {
    roleSaving.value = false
  }
}

const deleteRole = async (id: string) => {
  if (!confirm('Удалить роль?')) return
  
  console.log('🗑️ [Frontend] Удаляю роль:', id)
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'role-delete',
        data: { id }
      }
    })
    
    // Обновляем локальный список
    roles.value = roles.value.filter(r => r.id !== id)
    console.log('✅ [Frontend] Роль удалена из БД и UI')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка удаления роли:', e)
    alert('Ошибка удаления: ' + (e.data?.message || 'Не удалось удалить'))
  }
}

const editAdmin = (admin: any) => {
  editingAdmin.value = admin
  Object.assign(newAdmin, admin)
  showAddAdminDialog.value = true
}

const saveAdmin = async () => {
  adminSaving.value = true
  console.log('🟡 [Frontend] Сохранение администратора...')
  try {
    const response = await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'admin',
        data: {
          id: editingAdmin.value?.id || null,
          email: newAdmin.email,
          name: newAdmin.name,
          roleId: newAdmin.roleId,
          isActive: true,
        }
      },
    }) as any
    
    if (editingAdmin.value) {
      Object.assign(editingAdmin.value, newAdmin)
      console.log('✅ [Frontend] Администратор обновлен')
    } else {
      // Получаем ID из ответа или используем временный
      const newId = response?.id || String(Date.now())
      admins.value.push({ id: newId, ...newAdmin, isActive: true })
      console.log('✅ [Frontend] Администратор создан:', newId)
    }
    
    showAddAdminDialog.value = false
    editingAdmin.value = null
    Object.assign(newAdmin, { email: '', name: '', roleId: '1' })
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения администратора:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить'))
  } finally {
    adminSaving.value = false
  }
}

const deleteAdmin = async (id: string) => {
  if (!confirm('Удалить администратора?')) return
  
  console.log('🗑️ [Frontend] Удаляю администратора:', id)
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'admin-delete',
        data: { id }
      }
    })
    
    // Обновляем локальный список
    admins.value = admins.value.filter(a => a.id !== id)
    console.log('✅ [Frontend] Администратор удален из БД и UI')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка удаления администратора:', e)
    alert('Ошибка удаления: ' + (e.data?.message || 'Не удалось удалить'))
  }
}

const openChangePassword = (admin: any) => {
  console.log('🔑 [Frontend] Открываю диалог изменения пароля для:', admin.email)
  selectedAdminForPassword.value = admin
  newPassword.value = ''
  showChangePasswordDialog.value = true
}

const savePassword = async () => {
  if (!newPassword.value || newPassword.value.length < 6) {
    alert('Пароль должен содержать минимум 6 символов')
    return
  }
  
  passwordSaving.value = true
  console.log('🔐 [Frontend] Сохраняю новый пароль для:', selectedAdminForPassword.value?.email)
  
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'profile',
        data: {
          adminId: selectedAdminForPassword.value.id,
          email: selectedAdminForPassword.value.email,
          name: selectedAdminForPassword.value.name,
          password: newPassword.value,
        },
      },
    })
    
    console.log('✅ [Frontend] Пароль успешно изменен')
    showChangePasswordDialog.value = false
    selectedAdminForPassword.value = null
    newPassword.value = ''
    alert('Пароль успешно изменен!')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка изменения пароля:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось изменить пароль'))
  } finally {
    passwordSaving.value = false
  }
}

const deleteVkGroup = async (id: string) => {
  if (!confirm('Удалить группу?')) return
  
  console.log('🗑️ [Frontend] Удаляю VK группу:', id)
  try {
    await $fetch('/api/admin/vk-groups', {
      method: 'POST',
      body: { action: 'delete', data: { id } }
    })
    
    // Обновляем локальный список
    vkGroups.value = vkGroups.value.filter(g => g.id !== id)
    console.log('✅ [Frontend] VK группа удалена из БД и UI')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка удаления:', e)
    alert('Ошибка удаления: ' + (e.data?.message || 'Не удалось удалить'))
  }
}

const editVkGroup = (group: any) => {
  editingVkGroup.value = group
  Object.assign(newVkGroup, {
    name: group.name,
    vkUrl: group.vkId ? `https://vk.com/${group.vkId}` : '',
    vkId: group.vkId,
    courseSlug: group.courseSlug,
    token: group.token,
  })
  showAddVkDialog.value = true
}

const saveVkGroup = async () => {
  vkSaving.value = true
  console.log('🟡 [Frontend] Сохранение VK группы...')
  
  // Авто-извлечение ID если заполнена ссылка
  if (newVkGroup.vkUrl && !newVkGroup.vkId) {
    extractVkId()
  }
  
  // Проверяем что ID извлечен
  if (!newVkGroup.vkId) {
    alert('Введите ссылку на группу ВК или ID группы')
    vkSaving.value = false
    return
  }
  
  // Проверяем что курс выбран
  if (!newVkGroup.courseSlug) {
    alert('Выберите курс для привязки к группе')
    vkSaving.value = false
    return
  }
  
  try {
    if (editingVkGroup.value) {
      // Обновление существующей группы
      await $fetch('/api/admin/vk-groups', {
        method: 'POST',
        body: {
          action: 'update',
          data: {
            id: editingVkGroup.value.id,
            name: newVkGroup.name,
            vkId: newVkGroup.vkId,
            courseSlug: newVkGroup.courseSlug,
            token: newVkGroup.token,
          }
        }
      })
      
      // Обновляем локальные данные
      Object.assign(editingVkGroup.value, newVkGroup)
      console.log('✅ [Frontend] VK группа обновлена в БД')
    } else {
      // Создание новой группы
      const response = await $fetch('/api/admin/vk-groups', {
        method: 'POST',
        body: {
          action: 'create',
          data: {
            name: newVkGroup.name,
            vkId: newVkGroup.vkId,
            courseSlug: newVkGroup.courseSlug,
            token: newVkGroup.token,
          }
        }
      }) as any
      
      // Добавляем в локальный список с ID из БД
      vkGroups.value.push(response.group)
      console.log('✅ [Frontend] VK группа создана в БД:', response.group.id)
    }
    
    showAddVkDialog.value = false
    editingVkGroup.value = null
    Object.assign(newVkGroup, { name: '', vkUrl: '', vkId: '', courseSlug: '', token: '' })
    vkIdError.value = ''
    vkTestResult.value = null
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить'))
  } finally {
    vkSaving.value = false
  }
}

const saveEmail = async () => {
  email.saving = true
  console.log('🟡 [Frontend] Сохранение email настроек...')
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'email',
        data: {
          smtpHost: email.smtpHost,
          smtpPort: email.smtpPort,
          smtpUser: email.smtpUser,
          smtpPass: email.smtpPass,
          smtpFrom: email.smtpFrom,
          enableWelcome: email.enableWelcome,
          enablePurchase: email.enablePurchase,
          enableVkGroup: email.enableVkGroup,
        },
      },
    })
    console.log('✅ [Frontend] Email настройки сохранены')
    alert('Email настройки сохранены!')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения email:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить'))
  } finally {
    email.saving = false
  }
}

const saveSeo = async () => {
  seo.saving = true
  console.log('🟡 [Frontend] Сохранение SEO настроек...')
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'seo',
        data: {
          title: seo.title,
          description: seo.description,
          keywords: seo.keywords,
          enableSitemap: seo.enableSitemap,
          enableRobots: seo.enableRobots,
        },
      },
    })
    console.log('✅ [Frontend] SEO настройки сохранены')
    alert('SEO настройки сохранены!')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения SEO:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить'))
  } finally {
    seo.saving = false
  }
}

const saveGeneral = async () => {
  general.saving = true
  console.log('🟡 [Frontend] Сохранение общих настроек...')
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'general',
        data: {
          siteName: general.siteName,
          adminEmail: general.adminEmail,
        },
      },
    })
    console.log('✅ [Frontend] Общие настройки сохранены')
    alert('Общие настройки сохранены!')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения общих настроек:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить'))
  } finally {
    general.saving = false
  }
}

useSeoMeta({ title: 'Настройки — Админка' })

// Загружаем профиль и администраторов при монтировании компонента
onMounted(async () => {
  console.log('🟡 [Frontend] Компонент монтирован, загружаю данные из БД...')
  try {
    // Загружаем текущего пользователя с правами
    const meData = await $fetch('/api/admin/me')
    console.log('✅ [Frontend] Текущий пользователь загружен:', meData.admin)
    currentUser.value = meData.admin
    if (meData.role) {
      currentRole.value = meData.role
      console.log('✅ [Frontend] Права роли загружены:', meData.role.name)
    }
    
    // Загружаем профиль
    const profileData = await $fetch('/api/admin/profile')
    console.log('✅ [Frontend] Профиль загружен:', profileData.admin)
    profile.value.email = profileData.admin.email
    profile.value.name = profileData.admin.name
    
    // Загружаем роли
    const rolesData = await $fetch('/api/admin/roles')
    console.log('✅ [Frontend] Роли загружены:', rolesData.roles)
    roles.value = rolesData.roles
    
    // Загружаем администраторов
    const adminsData = await $fetch('/api/admin/admins')
    console.log('✅ [Frontend] Администраторы загружены:', adminsData.admins)
    admins.value = adminsData.admins
    
    // Загружаем остальные настройки
    const allSettings = await $fetch('/api/admin/settings/all')
    console.log('✅ [Frontend] Все настройки загружены:', allSettings)
    
    if (allSettings.email) {
      Object.assign(email, {
        smtpHost: allSettings.email.smtpHost,
        smtpPort: allSettings.email.smtpPort,
        smtpUser: allSettings.email.smtpUser,
        smtpPass: allSettings.email.smtpPass,
        smtpFrom: allSettings.email.smtpFrom,
        enableWelcome: !!allSettings.email.enableWelcome,
        enablePurchase: !!allSettings.email.enablePurchase,
        enableVkGroup: !!allSettings.email.enableVkGroup,
      })
    }
    
    if (allSettings.seo) {
      Object.assign(seo, {
        title: allSettings.seo.title,
        description: allSettings.seo.description,
        keywords: allSettings.seo.keywords,
        enableSitemap: !!allSettings.seo.enableSitemap,
        enableRobots: !!allSettings.seo.enableRobots,
      })
    }
    
    if (allSettings.general) {
      Object.assign(general, {
        siteName: allSettings.general.siteName,
        adminEmail: allSettings.general.adminEmail,
      })
    }
    
    // Загружаем VK группы
    if (allSettings.vkGroups) {
      vkGroups.value = allSettings.vkGroups
      console.log('✅ [Frontend] VK группы загружены:', allSettings.vkGroups.length)
    }
    
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
