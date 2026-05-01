import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import * as schema from './schema'

// БД должна быть в корне проекта, а не в .output/
// Используем import.meta.url для получения текущего пути в ES модулях
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Когда сервер запускается из .output/server/index.mjs, 
// нам нужно подняться на 3 уровня вверх до корня проекта
const dbPath = process.env.DB_PATH || resolve(__dirname, '../../../kroyfit.db')
console.log('📁 [DB] Путь к БД:', dbPath)

const sqlite = new Database(dbPath)
export const db = drizzle(sqlite, { schema })

// Инициализация таблиц при старте сервера
try {
  // Проверяем, существуют ли таблицы
  const tables = sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='courses'").get()
  
  if (!tables) {
    console.log('📝 [DB] Создание таблиц...')
    
    sqlite.exec(`
      CREATE TABLE IF NOT EXISTS roles (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        description TEXT,
        can_view_dashboard INTEGER DEFAULT 0,
        can_manage_courses INTEGER DEFAULT 0,
        can_manage_users INTEGER DEFAULT 0,
        can_manage_purchases INTEGER DEFAULT 0,
        can_manage_settings INTEGER DEFAULT 0,
        can_manage_admins INTEGER DEFAULT 0,
        can_edit_plan INTEGER DEFAULT 0,
        can_manage_profile INTEGER DEFAULT 0,
        can_manage_roles INTEGER DEFAULT 0,
        can_manage_vk_groups INTEGER DEFAULT 0,
        can_manage_email INTEGER DEFAULT 0,
        can_manage_seo INTEGER DEFAULT 0,
        can_manage_general_settings INTEGER DEFAULT 0,
        created_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS admins (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        role_id TEXT,
        is_active INTEGER DEFAULT 1,
        created_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        vk_id TEXT UNIQUE,
        name TEXT NOT NULL,
        email TEXT,
        avatar TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS courses (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        description TEXT,
        full_description TEXT,
        price INTEGER NOT NULL,
        category TEXT DEFAULT 'Базовый',
        difficulty TEXT DEFAULT 'Начинающий',
        duration TEXT,
        lessons_count INTEGER DEFAULT 0,
        image TEXT,
        benefits TEXT,
        is_published INTEGER DEFAULT 0,
        vk_group_id TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS purchases (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        course_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        status TEXT DEFAULT 'pending',
        payment_id TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS vk_groups (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        vk_id TEXT NOT NULL,
        course_slug TEXT NOT NULL,
        token TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS email_settings (
        id INTEGER PRIMARY KEY,
        smtp_host TEXT NOT NULL DEFAULT 'smtp.gmail.com',
        smtp_port INTEGER NOT NULL DEFAULT 587,
        smtp_user TEXT NOT NULL DEFAULT '',
        smtp_pass TEXT NOT NULL DEFAULT '',
        smtp_from TEXT NOT NULL DEFAULT 'noreply@kroyfit.ru',
        enable_welcome INTEGER NOT NULL DEFAULT 1,
        enable_purchase INTEGER NOT NULL DEFAULT 1,
        enable_vk_group INTEGER NOT NULL DEFAULT 1,
        updated_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS seo_settings (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL DEFAULT 'Генетика Кроя',
        description TEXT NOT NULL DEFAULT 'Курсы кройки и шитья',
        keywords TEXT NOT NULL DEFAULT 'кройка, шитье, курсы',
        og_image TEXT DEFAULT '',
        enable_sitemap INTEGER NOT NULL DEFAULT 1,
        enable_robots INTEGER NOT NULL DEFAULT 1,
        updated_at TEXT DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS general_settings (
        id INTEGER PRIMARY KEY,
        site_name TEXT NOT NULL DEFAULT 'Генетика Кроя',
        admin_email TEXT NOT NULL DEFAULT '',
        updated_at TEXT DEFAULT (datetime('now'))
      );
    `)
    
    console.log('✅ [DB] Таблицы созданы')
  } else {
    console.log('✅ [DB] Таблицы уже существуют')
    
    // Миграция: добавляем колонку og_image в seo_settings если её нет
    try {
      const columns = sqlite.prepare("PRAGMA table_info(seo_settings)").all()
      const hasOgImage = columns.some((col: any) => col.name === 'og_image')
      if (!hasOgImage) {
        console.log('📝 [DB] Миграция: добавляем колонку og_image в seo_settings')
        sqlite.exec(`ALTER TABLE seo_settings ADD COLUMN og_image TEXT DEFAULT ''`)
        console.log('✅ [DB] Колонка og_image добавлена')
      }
    } catch (migrationError) {
      console.error('❌ [DB] Ошибка миграции:', migrationError)
    }
  }
} catch (e) {
  console.error('❌ [DB] Ошибка инициализации:', e)
}
