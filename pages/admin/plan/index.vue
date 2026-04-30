<template>
  <div>
    <div class="d-flex align-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">План разработки</h1>
        <p class="text-body-2 text-grey-darken-1">Текущие и будущие задачи</p>
      </div>
      <v-spacer />
      <v-btn
        v-if="!editing"
        color="green-darken-3"
        variant="flat"
        size="small"
        style="border-radius: 8px;"
        @click="startEdit"
      >
        <v-icon start size="18">mdi-pencil</v-icon>
        Редактировать
      </v-btn>
      <v-btn
        v-if="editing"
        color="green-darken-3"
        variant="flat"
        size="small"
        style="border-radius: 8px;"
        :loading="saving"
        @click="savePlan"
      >
        <v-icon start size="18">mdi-content-save</v-icon>
        Сохранить
      </v-btn>
      <v-btn
        v-if="editing"
        variant="text"
        color="grey-darken-2"
        size="small"
        class="ml-2"
        @click="cancelEdit"
      >
        Отмена
      </v-btn>
    </div>

    <v-card class="pa-6" style="border: 1px solid #E2E8F0; border-radius: 12px;">
      <div v-if="!editing" class="plan-content" v-html="renderedPlan"></div>
      
      <div v-if="editing">
        <v-textarea
          v-model="planContent"
          variant="outlined"
          rows="30"
          hide-details
          class="font-monospace"
        />
        <p class="text-caption text-grey-darken-1 mt-2">
          Поддерживает Markdown. Используйте ## для заголовков, - [ ] для чекбоксов, | | для таблиц.
        </p>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

definePageMeta({ middleware: 'admin', layout: 'admin' })

const editing = ref(false)
const saving = ref(false)
const planContent = ref('')
const renderedPlan = ref('')

const defaultPlan = `## ✅ Выполнено

### Дизайн
- [x] Админка в стиле nuxt.com (минимализм, зеленый акцент)
- [x] Fullscreen без отступов по бокам
- [x] Сэндвич-меню для мобильных
- [x] Светлое выделение меню

### Админка
- [x] Dashboard с последними покупками
- [x] Управление курсами
- [x] Управление пользователями
- [x] Настройки → ВКонтакте

### Интеграции
- [x] VK ID SDK кнопка логина
- [x] Автодобавление пользователя после VK авторизации

---

## 📋 Запланировано

### Приоритет: Высокий
- [ ] Интеграция ЮKassa (оплата курсов)
- [ ] Подключение базы данных
- [ ] Привязка VK группы к курсу

### Приоритет: Средний
- [ ] Страница профиля пользователя
- [ ] Личный кабинет ученика
- [ ] Email уведомления

*Обновлено: ${new Date().toLocaleDateString('ru-RU')}*`

onMounted(async () => {
  await loadPlan()
})

const loadPlan = async () => {
  try {
    const res = await $fetch('/api/plan')
    planContent.value = res.content || defaultPlan
    renderedPlan.value = renderMarkdown(planContent.value)
  } catch (e) {
    planContent.value = defaultPlan
    renderedPlan.value = renderMarkdown(defaultPlan)
  }
}

const startEdit = () => {
  editing.value = true
}

const cancelEdit = () => {
  editing.value = false
  loadPlan()
}

const savePlan = async () => {
  saving.value = true
  try {
    await $fetch('/api/plan', {
      method: 'POST',
      body: { content: planContent.value },
    })
    editing.value = false
    renderedPlan.value = renderMarkdown(planContent.value)
  } catch (e) {
    console.error('Ошибка сохранения:', e)
    alert('Ошибка сохранения плана')
  } finally {
    saving.value = false
  }
}

// Простой рендеринг Markdown
const renderMarkdown = (md: string) => {
  if (!md) return ''
  
  let html = md
    // Заголовки
    .replace(/^## (.+)$/gm, '<h2 style="color:#020617;font-size:1.25rem;font-weight:700;margin:1.5rem 0 0.5rem;">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="color:#020617;font-size:1.1rem;font-weight:600;margin:1rem 0 0.25rem;">$1</h3>')
    // Жирный
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Чекбоксы
    .replace(/- \[x\] (.+)/gi, '<span style="color:#00DC82;">✓</span> $1')
    .replace(/- \[ \] (.+)/gi, '<span style="color:#ccc;">○</span> $1')
    // Списки
    .replace(/^- (.+)/gm, '<li style="margin-left:1rem;">$1</li>')
    // Разделитель
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #E2E8F0;margin:1.5rem 0;">')
    // Курсив
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Таблицы (простой парсинг)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.some(c => /^-+$/.test(c.trim()))) return ''
      return `<tr>${cells.map(c => `<td style="padding:8px;border:1px solid #E2E8F0;">${c.trim()}</td>`).join('')}</tr>`
    })
    // Параграфы
    .replace(/\n\n/g, '</p><p style="margin:0.5rem 0;">')
    // Переносы строк
    .replace(/\n/g, '<br>')
    // Итог
    .replace(/<br><hr/g, '<hr')
  
  return `<div style="line-height:1.6;">${html}</div>`
}

useSeoMeta({
  title: 'План разработки — Админка',
})
</script>

<style scoped>
.font-monospace :deep(textarea) {
  font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
  font-size: 13px;
  line-height: 1.5;
}
</style>