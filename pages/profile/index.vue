<template>
  <v-app>
    <v-app-bar color="white" elevation="0" class="border-b">
      <v-container class="d-flex align-center">
        <v-btn icon to="/" class="mr-3">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="text-h6 font-weight-bold" style="color: #00DC82;">
          ✂️ {{ siteName }}
        </div>
        <v-spacer />
        <v-btn variant="text" @click="logout">Выйти</v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <v-container class="py-8">
        <v-row>
          <!-- Профиль -->
          <v-col cols="12" md="4">
            <v-card class="pa-6" style="border-radius: 12px;">
              <div class="text-center mb-4">
                <v-avatar size="100" color="green-darken-3" class="mb-3">
                  <v-img v-if="user.avatar" :src="user.avatar" />
                  <v-icon v-else size="50" color="white">mdi-account</v-icon>
                </v-avatar>
                <h2 class="text-h5 font-weight-bold mb-1">{{ user.name }}</h2>
                <p class="text-body-2 text-grey-darken-1">{{ user.email }}</p>
                <v-chip v-if="user.vkId" size="small" color="blue" class="mt-2">
                  <v-icon start size="16">mdi-vk</v-icon>
                  VK {{ user.vkId }}
                </v-chip>
              </div>

              <v-divider class="my-4" />

              <div class="mb-3">
                <p class="text-caption text-grey-darken-1">Дата регистрации</p>
                <p class="text-body-2 font-weight-medium">{{ formatDate(user.createdAt) }}</p>
              </div>

              <div class="mb-3">
                <p class="text-caption text-grey-darken-1">Куплено курсов</p>
                <p class="text-h6 font-weight-bold" style="color: #00DC82;">{{ purchases.length }}</p>
              </div>
            </v-card>
          </v-col>

          <!-- Мои курсы -->
          <v-col cols="12" md="8">
            <h2 class="text-h5 font-weight-bold mb-4">Мои курсы</h2>

            <v-row v-if="purchases.length > 0">
              <v-col v-for="purchase in purchases" :key="purchase.id" cols="12" sm="6">
                <v-card class="pa-4" style="border-radius: 12px;">
                  <h3 class="text-h6 font-weight-bold mb-2">{{ purchase.courseName }}</h3>
                  <p class="text-body-2 text-grey-darken-1 mb-3">{{ purchase.courseDescription }}</p>
                  
                  <v-chip size="small" :color="purchase.status === 'paid' ? 'green-darken-3' : 'grey'" class="mb-3">
                    {{ purchase.status === 'paid' ? 'Оплачено' : 'Ожидание оплаты' }}
                  </v-chip>

                  <v-divider class="my-3" />

                  <div class="d-flex align-center justify-space-between">
                    <span class="text-caption text-grey-darken-1">{{ formatDate(purchase.createdAt) }}</span>
                    <v-btn size="small" color="green-darken-3" variant="flat" :disabled="purchase.status !== 'paid'">
                      Начать обучение
                    </v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <v-alert v-else type="info" variant="tonal" class="mt-4">
              У вас пока нет купленных курсов. <a href="/#courses">Выбрать курс</a>
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const user = ref({
  id: '1',
  name: 'Анна Иванова',
  email: 'anna@example.com',
  vkId: '123456',
  avatar: '',
  createdAt: '2026-03-15T10:00:00Z',
})

const purchases = ref([
  {
    id: '1',
    courseName: 'Технология пошива',
    courseDescription: 'Основы шитья для начинающих',
    status: 'paid',
    createdAt: '2026-03-20T14:30:00Z',
  },
  {
    id: '2',
    courseName: 'Дамское бельё',
    courseDescription: 'Конструирование и пошив белья',
    status: 'paid',
    createdAt: '2026-04-10T09:15:00Z',
  },
])

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const logout = () => {
  // TODO: Очистить сессию
  navigateTo('/')
}

useSeoMeta({
  title: 'Мой профиль',
})
</script>
