<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-btn
        icon
        variant="text"
        color="grey-darken-2"
        to="/admin/courses"
        class="mr-3"
      >
        <v-icon size="20">mdi-arrow-left</v-icon>
      </v-btn>
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">
          {{ isEdit ? 'Редактирование' : 'Новый курс' }}
        </h1>
        <p class="text-body-2 text-grey-darken-1">
          {{ isEdit ? 'Изменение данных курса' : 'Заполните информацию о курсе' }}
        </p>
      </div>
    </div>

    <v-row>
      <v-col cols="12" md="8">
        <v-form @submit.prevent="saveCourse">
          <div class="mb-6">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Название</label>
            <v-text-field
              v-model="form.title"
              placeholder="Название курса"
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
              @input="generateSlug"
            />
          </div>

          <div class="mb-6">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Slug (URL)</label>
            <v-text-field
              v-model="form.slug"
              placeholder="kurs-nazvanie"
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

           <div class="mb-6">
             <label class="text-caption text-grey-darken-1 d-block mb-1">Описание</label>
             <v-textarea
               v-model="form.description"
               placeholder="Описание курса"
               variant="outlined"
               density="compact"
               rows="4"
               hide-details
               class="mb-4"
             />
           </div>

           <div class="mb-6">
             <label class="text-caption text-grey-darken-1 d-block mb-1">Фотография курса</label>
             <v-file-input
               v-model="imageFile"
               accept="image/*"
               placeholder="Выберите фотографию"
               variant="outlined"
               density="compact"
               hide-details
               class="mb-4"
               @update:model-value="handleImageUpload"
             />
             <div v-if="form.image" class="mt-2">
               <img :src="form.image" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px;">
             </div>
           </div>

           <div class="mb-6">
             <label class="text-caption text-grey-darken-1 d-block mb-1">Что вы получите</label>
             <div class="mb-4">
               <div v-for="(benefit, index) in form.benefits" :key="index" class="d-flex ga-2 mb-2">
                 <v-text-field
                   v-model="form.benefits[index]"
                   placeholder="Преимущество курса"
                   variant="outlined"
                   density="compact"
                   hide-details
                   class="flex-grow-1"
                 />
                 <v-btn
                   icon
                   size="small"
                   color="red-darken-3"
                   variant="text"
                   @click="removeBenefit(index)"
                 >
                   <v-icon size="20">mdi-delete</v-icon>
                 </v-btn>
               </div>
             </div>
             <v-btn
               size="small"
               color="blue-darken-3"
               variant="outlined"
               @click="addBenefit"
             >
               <v-icon size="20" class="mr-1">mdi-plus</v-icon>
               Добавить преимущество
             </v-btn>
           </div>

          <v-row>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Цена (₽)</label>
              <v-text-field
                v-model.number="form.price"
                type="number"
                placeholder="0"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Длительность</label>
              <v-text-field
                v-model="form.duration"
                placeholder="2 месяца"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Категория</label>
              <v-select
                v-model="form.category"
                :items="categories"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Уроков</label>
              <v-text-field
                v-model.number="form.lessonsCount"
                type="number"
                placeholder="0"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
          </v-row>

          <v-checkbox
            v-model="form.isPublished"
            label="Опубликовать курс"
            hide-details
            class="mb-6"
            color="green-darken-3"
          />

          <div class="d-flex ga-2">
            <v-btn
              type="submit"
              color="green-darken-3"
              variant="flat"
              :loading="saving"
              style="border-radius: 8px;"
            >
              {{ isEdit ? 'Сохранить' : 'Создать' }}
            </v-btn>
            <v-btn
              variant="text"
              color="grey-darken-2"
              to="/admin/courses"
            >
              Отмена
            </v-btn>
          </div>
        </v-form>
      </v-col>

      <v-col cols="12" md="4">
        <div class="preview-card">
          <p class="text-caption text-grey-darken-1 font-weight-medium mb-4">Предпросмотр</p>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Название</p>
            <p class="text-body-2 font-weight-medium" style="color: #020617;">
              {{ form.title || 'Название курса' }}
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Цена</p>
            <p class="text-h6 font-weight-bold" style="color: #020617;">
              {{ form.price ? `${form.price} ₽` : '0 ₽' }}
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Категория</p>
            <v-chip size="x-small" color="grey-darken-4" text-color="white" label>
              {{ form.category || 'Категория' }}
            </v-chip>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Статус</p>
            <v-chip
              size="x-small"
              :color="form.isPublished ? 'grey-darken-4' : 'grey-lighten-1'"
              text-color="white"
              label
            >
              {{ form.isPublished ? 'Опубликован' : 'Черновик' }}
            </v-chip>
          </div>
          <v-divider class="my-4" />
          <div>
            <p class="text-caption text-grey-darken-1">Описание</p>
            <p class="text-body-2">{{ form.description || 'Описание курса' }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const route = useRoute()
const router = useRouter()

const isEdit = computed(() => !!route.params.id)
const saving = ref(false)

const categories = ['Базовый', 'Продвинутый', 'Спецкурс']

const form = reactive({
  title: '',
  description: '',
  slug: '',
  price: 0,
  category: 'Базовый',
  duration: '',
  lessonsCount: 0,
  isPublished: false,
  image: '',
  benefits: [],
})

const imageFile = ref(null)

const generateSlug = () => {
  if (!form.title) {
    form.slug = ''
    return
  }
  
  // Транслитерация русских букв в латиницу
  const translitMap: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
  }
  
  form.slug = form.title
    .toLowerCase()
    .split('')
    .map(char => translitMap[char] || char)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const handleImageUpload = async (files: any) => {
  if (!files) return
  
  // Vuetify 3 возвращает один File объект, не массив
  const file = Array.isArray(files) ? files[0] : files
  
  if (!file || !(file instanceof Blob)) return
  
  const reader = new FileReader()
  
  reader.onload = (e: any) => {
    form.image = e.target.result
  }
  
  reader.readAsDataURL(file)
}

const addBenefit = () => {
  form.benefits.push('')
}

const removeBenefit = (index: number) => {
  form.benefits.splice(index, 1)
}

const saveCourse = async () => {
  saving.value = true
  try {
    console.log('📝 [Frontend] Сохранение нового курса:', form)
    
    const response = await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'course',
        data: {
          title: form.title,
          description: form.description,
          slug: form.slug,
          price: form.price,
          category: form.category,
          duration: form.duration,
          lessonsCount: form.lessonsCount,
          isPublished: form.isPublished,
          image: form.image,
          benefits: JSON.stringify(form.benefits.filter(b => b.trim())),
        },
      },
    })
    
    console.log('✅ [Frontend] Курс создан:', response.course.id)
    await router.push('/admin/courses')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось создать курс'))
  } finally {
    saving.value = false
  }
}

useSeoMeta({
  title: `${isEdit.value ? 'Редактирование' : 'Новый курс'} — Админка`,
})
</script>

<style scoped>
.preview-card {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
}

.ga-2 {
  gap: 8px;
}

.v-application {
  font-family: 'Inter', sans-serif !important;
}
</style>
