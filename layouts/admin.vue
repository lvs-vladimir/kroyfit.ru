<template>
  <v-app class="bg-admin">
    <v-main class="pa-0">
      <!-- Top Bar -->
      <div class="d-flex align-center px-4 px-md-6 py-3" style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
        <!-- Burger Menu for Mobile -->
        <v-btn
          icon
          variant="text"
          color="grey-darken-2"
          class="mr-3 d-md-none"
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <div class="text-h6 font-weight-bold" style="color: #020617;">
          ✂️ Генетика Кроя
        </div>
        <v-spacer />
        <v-btn
          size="small"
          variant="text"
          color="grey-darken-2"
          @click="logout"
        >
          <v-icon start size="18">mdi-logout</v-icon>
          <span class="d-none d-sm-inline">Выйти</span>
        </v-btn>
      </div>

      <div class="admin-body">
        <!-- Mobile Navigation Drawer -->
        <v-navigation-drawer
          v-model="drawer"
          temporary
          class="d-md-none"
          style="background: #F8FAFC;"
        >
          <v-card class="menu-card ma-3" elevation="0">
            <v-list class="py-2" density="compact">
              <v-list-item
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                :active="isActive(item.path)"
                class="menu-item mb-1"
                rounded="lg"
                @click="drawer = false"
              >
                <template #prepend>
                  <v-icon :icon="item.icon" size="20" />
                </template>
                <v-list-item-title class="text-body-2 font-weight-medium">
                  {{ item.label }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-navigation-drawer>

        <!-- Desktop Sidebar -->
        <div class="admin-sidebar d-none d-md-block">
          <v-card class="menu-card" elevation="0">
            <v-list class="py-2" density="compact">
              <v-list-item
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                :active="isActive(item.path)"
                class="menu-item mb-1"
                rounded="lg"
              >
                <template #prepend>
                  <v-icon :icon="item.icon" size="20" />
                </template>
                <v-list-item-title class="text-body-2 font-weight-medium">
                  {{ item.label }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </div>

        <!-- Right: Content -->
        <div class="admin-content">
          <v-card class="content-card" elevation="0">
            <div class="content-inner">
              <slot />
            </div>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin' })

const router = useRouter()
const route = useRoute()
const drawer = ref(false)

  const menuItems = [
    { label: 'Dashboard', icon: 'mdi-view-dashboard-outline', path: '/admin' },
    { label: 'Курсы', icon: 'mdi-book-open-variant', path: '/admin/courses' },
    { label: 'Пользователи', icon: 'mdi-account-group', path: '/admin/users' },
    { label: 'Покупки', icon: 'mdi-cart-outline', path: '/admin/purchases' },
    { label: 'Настройки', icon: 'mdi-cog-outline', path: '/admin/settings' },
    { label: 'План', icon: 'mdi-clipboard-text-outline', path: '/admin/plan' },
  ]

const isActive = (path: string) => route.path === path

const logout = () => {
  const token = useCookie('admin-token')
  token.value = null
  router.push('/admin/login')
}
</script>

<style scoped>
.bg-admin {
  background: #F8FAFC;
  min-height: 100vh;
}

.admin-body {
  display: flex;
  height: calc(100vh - 57px);
}

.admin-sidebar {
  width: 280px;
  min-width: 280px;
  padding: 16px;
  overflow-y: auto;
  border-right: 1px solid #E2E8F0;
  background: #F8FAFC;
}

.admin-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.menu-card {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
}

.menu-item {
  margin: 0 8px;
  border-radius: 8px !important;
  min-height: 40px;
}

.menu-item:hover {
  background: #FFFFFF !important;
}

:deep(.v-list-item--active) {
  background: #F0FDF4 !important;
  color: #020617 !important;
}

:deep(.v-list-item--active .v-icon) {
  color: #00DC82 !important;
}

:deep(.v-list-item--active .v-list-item-title) {
  color: #020617 !important;
  font-weight: 600 !important;
}

.content-card {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
  min-height: 100%;
}

.content-inner {
  padding: 32px;
}

.v-application {
  font-family: 'Inter', sans-serif !important;
}

@media (max-width: 960px) {
  .admin-body {
    height: auto;
    min-height: calc(100vh - 57px);
  }

  .admin-content {
    padding: 12px;
  }

  .content-inner {
    padding: 20px;
  }
}
</style>
