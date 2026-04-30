import { db } from '../database/db'
import { courses } from '../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    const allCourses = await db.select().from(courses)

    const baseUrl = 'https://kroyfit.ru'
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Главная страница
    xml += `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>\n`

    // Страницы курсов
    for (const course of allCourses) {
      xml += `  <url>
    <loc>${baseUrl}/courses/${course.slug}</loc>
    <lastmod>${new Date(course.createdAt || new Date()).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`
    }

    // Профиль и кабинет
    xml += `  <url>
    <loc>${baseUrl}/profile</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`

    xml += `  <url>
    <loc>${baseUrl}/cabinet</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`

    xml += '</urlset>'

    setHeader(event, 'Content-Type', 'application/xml')
    return xml
  } catch (e) {
    console.error('Ошибка генерации sitemap:', e)
    return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>'
  }
})
