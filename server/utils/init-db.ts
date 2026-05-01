import { db } from '../database/db'
import { courses } from '../database/schema'

export async function initializeDatabase() {
  try {
    // Проверяем, есть ли курсы в БД
    const existingCourses = await db.select().from(courses).limit(1)
    
    if (existingCourses.length === 0) {
      console.log('📝 [DB] Добавление тестовых курсов...')
      
      // Добавляем тестовые курсы
      await db.insert(courses).values([
        {
          id: '1',
          title: 'Технология пошива',
          slug: 'tekhnologiya-poshiva',
          description: 'Основы шитья для начинающих. Юбка, брюки, платье.',
          fullDescription: null,
          price: 500,
          category: 'Базовый',
          difficulty: 'Начинающий',
          duration: '2 месяца',
          lessonsCount: 16,
          image: null,
          benefits: JSON.stringify(['Основы шитья', 'Работа с тканями', 'Пошив одежды', 'Практические навыки']),
          isPublished: true,
          vkGroupId: null,
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Мастер конструирования',
          slug: 'master-konstruirovaniya',
          description: 'Методика точного кроя по Злачевской. Диплом.',
          fullDescription: null,
          price: 600,
          category: 'Продвинутый',
          difficulty: 'Начинающий',
          duration: '3 месяца',
          lessonsCount: 24,
          image: null,
          benefits: JSON.stringify(['Конструирование', 'Методика кроя', 'Точные расчеты', 'Профессиональный уровень']),
          isPublished: true,
          vkGroupId: null,
          createdAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Дамское бельё',
          slug: 'damskoe-bele',
          description: 'Конструирование и пошив красивого белья.',
          fullDescription: null,
          price: 700,
          category: 'Спецкурс',
          difficulty: 'Начинающий',
          duration: '1.5 месяца',
          lessonsCount: 12,
          image: '',
          benefits: JSON.stringify(['Конструирование белья', 'Работа с деликатными тканями', 'Дизайн', 'Пошив']),
          isPublished: true,
          vkGroupId: null,
          createdAt: new Date().toISOString(),
        },
      ])
      
      console.log('✅ [DB] Тестовые курсы добавлены')
    }
  } catch (e) {
    console.error('❌ [DB] Ошибка инициализации:', e)
  }
}
