// POST /api/vk/invite
// Добавление пользователя в VK группу после покупки курса

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, courseSlug, vkId } = body

  if (!userId || !courseSlug || !vkId) {
    throw createError({
      statusCode: 400,
      message: 'Не переданы обязательные параметры: userId, courseSlug, vkId',
    })
  }

  // Получаем настройки группы для курса
  const groupSettings = await getGroupSettings(courseSlug)
  
  if (!groupSettings || !groupSettings.vkId || !groupSettings.token) {
    throw createError({
      statusCode: 404,
      message: 'Группа ВК для данного курса не настроена',
    })
  }

  try {
    // Приглашаем пользователя в группу через VK API
    // https://vk.com/dev/groups.invite
    const response = await $fetch('https://api.vk.com/method/groups.invite', {
      method: 'POST',
      body: new URLSearchParams({
        group_id: groupSettings.vkId,
        user_id: vkId,
        access_token: groupSettings.token,
        v: '5.131',
      }),
    })

    if (response.error) {
      throw new Error(response.error.error_msg || 'Ошибка VK API')
    }

    return {
      success: true,
      message: `Пользователь ${vkId} приглашен в группу "${groupSettings.name}"`,
      data: response.response,
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: `Ошибка приглашения в группу: ${error.message}`,
    })
  }
})

// Заглушка для получения настроек группы (позже будет из БД)
async function getGroupSettings(courseSlug: string) {
  // В реальности здесь будет запрос к БД
  const groups = [
    {
      courseSlug: 'tekhnologiya-poshiva',
      vkId: '123456',
      name: 'Генетика Кроя — Технология пошива',
      token: process.env.VK_COMMUNITY_TOKEN || '',
    },
    {
      courseSlug: 'master-konstruirovaniya',
      vkId: '234567',
      name: 'Генетика Кроя — Мастер конструирования',
      token: process.env.VK_COMMUNITY_TOKEN || '',
    },
  ]

  return groups.find(g => g.courseSlug === courseSlug) || null
}
