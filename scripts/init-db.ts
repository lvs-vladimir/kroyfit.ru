import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { resolve } from 'path'
import * as schema from '../server/database/schema'

const DB_PATH = resolve(process.cwd(), 'kroyfit.db')
console.log('📁 [DB] Путь к БД:', DB_PATH)
const sqlite = new Database(DB_PATH)
const db = drizzle(sqlite)

console.log('Создание таблиц...')

// Роли
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
  )
`)

// Добавляем новые колонки если таблица уже существует (миграция)
try {
  sqlite.exec(`ALTER TABLE roles ADD COLUMN can_manage_profile INTEGER DEFAULT 0`)
  console.log('✅ Колонка can_manage_profile добавлена')
} catch (e) { /* уже существует */ }
try {
  sqlite.exec(`ALTER TABLE roles ADD COLUMN can_manage_roles INTEGER DEFAULT 0`)
  console.log('✅ Колонка can_manage_roles добавлена')
} catch (e) { /* уже существует */ }
try {
  sqlite.exec(`ALTER TABLE roles ADD COLUMN can_manage_vk_groups INTEGER DEFAULT 0`)
  console.log('✅ Колонка can_manage_vk_groups добавлена')
} catch (e) { /* уже существует */ }
try {
  sqlite.exec(`ALTER TABLE roles ADD COLUMN can_manage_email INTEGER DEFAULT 0`)
  console.log('✅ Колонка can_manage_email добавлена')
} catch (e) { /* уже существует */ }
try {
  sqlite.exec(`ALTER TABLE roles ADD COLUMN can_manage_seo INTEGER DEFAULT 0`)
  console.log('✅ Колонка can_manage_seo добавлена')
} catch (e) { /* уже существует */ }
try {
  sqlite.exec(`ALTER TABLE roles ADD COLUMN can_manage_general_settings INTEGER DEFAULT 0`)
  console.log('✅ Колонка can_manage_general_settings добавлена')
} catch (e) { /* уже существует */ }

// Администраторы
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    role_id TEXT REFERENCES roles(id),
    is_active INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

// Пользователи
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    vk_id TEXT UNIQUE,
    name TEXT NOT NULL,
    email TEXT,
    avatar TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

// Курсы
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    full_description TEXT,
    price INTEGER NOT NULL,
    category TEXT DEFAULT 'Базовый',
    color TEXT,
    image TEXT,
    duration TEXT,
    difficulty TEXT DEFAULT 'Начинающий',
    vk_group_id TEXT,
    lessons_count INTEGER DEFAULT 0,
    is_published INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

// Покупки
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS purchases (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    course_id TEXT NOT NULL,
    amount INTEGER NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

// VK Группы
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS vk_groups (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    vk_id TEXT NOT NULL,
    course_slug TEXT NOT NULL,
    token TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

// Email настройки
sqlite.exec(`
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
  )
`)

// SEO настройки
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS seo_settings (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL DEFAULT 'Генетика Кроя',
    description TEXT NOT NULL DEFAULT 'Курсы кройки и шитья',
    keywords TEXT NOT NULL DEFAULT 'кройка, шитье, курсы',
    enable_sitemap INTEGER NOT NULL DEFAULT 1,
    enable_robots INTEGER NOT NULL DEFAULT 1,
    updated_at TEXT DEFAULT (datetime('now'))
  )
`)

// Общие настройки
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS general_settings (
    id INTEGER PRIMARY KEY,
    site_name TEXT NOT NULL DEFAULT 'Генетика Кроя',
    admin_email TEXT NOT NULL DEFAULT '',
    updated_at TEXT DEFAULT (datetime('now'))
  )
`)

console.log('Добавление тестовых данных...')

// Роли
const existingRoles = sqlite.prepare('SELECT COUNT(*) as count FROM roles').get() as any
if (existingRoles.count === 0) {
  sqlite.exec(`
    INSERT INTO roles (id, name, description, can_view_dashboard, can_manage_courses, can_manage_users, can_manage_purchases, can_manage_settings, can_manage_admins, can_edit_plan, can_manage_profile, can_manage_roles, can_manage_vk_groups, can_manage_email, can_manage_seo, can_manage_general_settings) VALUES
    ('1', 'Администратор', 'Полный доступ ко всем функциям', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
    ('2', 'Модератор', 'Управление курсами и пользователями', 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0),
    ('3', 'Редактор', 'Редактирование контента', 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1)
  `)
  console.log('Роли добавлены')
}

// Администраторы
const existingAdmins = sqlite.prepare('SELECT COUNT(*) as count FROM admins').get() as any
if (existingAdmins.count === 0) {
  sqlite.exec(`
    INSERT INTO admins (id, email, password, name, role_id, is_active) VALUES
    ('1', 'ch32v003@gmail.com', 'admin123', 'Vova', '1', 1)
  `)
  console.log('Администраторы добавлены')
}

// Email настройки
const existingEmail = sqlite.prepare('SELECT COUNT(*) as count FROM email_settings').get() as any
if (existingEmail.count === 0) {
  sqlite.exec(`
    INSERT INTO email_settings (id, smtp_host, smtp_port, smtp_user, smtp_pass, smtp_from, enable_welcome, enable_purchase, enable_vk_group) VALUES
    (1, 'smtp.gmail.com', 587, '', '', 'noreply@kroyfit.ru', 1, 1, 1)
  `)
  console.log('Email настройки добавлены')
}

// SEO настройки
const existingSeo = sqlite.prepare('SELECT COUNT(*) as count FROM seo_settings').get() as any
if (existingSeo.count === 0) {
  sqlite.exec(`
    INSERT INTO seo_settings (id, title, description, keywords, enable_sitemap, enable_robots) VALUES
    (1, 'Генетика Кроя', 'Курсы кройки и шитья', 'кройка, шитье, курсы', 1, 1)
  `)
  console.log('SEO настройки добавлены')
}

// Общие настройки
const existingGeneral = sqlite.prepare('SELECT COUNT(*) as count FROM general_settings').get() as any
if (existingGeneral.count === 0) {
  sqlite.exec(`
    INSERT INTO general_settings (id, site_name, admin_email) VALUES
    (1, 'Генетика Кроя', '')
  `)
  console.log('Общие настройки добавлены')
}

// Курсы
const existingCourses = sqlite.prepare('SELECT COUNT(*) as count FROM courses').get() as any
if (existingCourses.count === 0) {
  sqlite.exec(`
    INSERT INTO courses (id, title, slug, description, price, category, duration, lessons_count, is_published) VALUES
    ('1', 'Технология пошива', 'tekhnologiya-poshiva', 'Основы шитья для начинающих. Юбка, брюки, платье.', 15000, 'Базовый', '2 месяца', 16, 1),
    ('2', 'Мастер конструирования', 'master-konstruirovaniya', 'Методика точного кроя по Злачевской. Диплом.', 25000, 'Продвинутый', '3 месяца', 24, 1),
    ('3', 'Дамское бельё', 'damskoe-bele', 'Конструирование и пошив красивого белья.', 12000, 'Спецкурс', '1.5 месяца', 12, 1)
  `)
  console.log('Курсы добавлены')
}

// Пользователи
const existingUsers = sqlite.prepare('SELECT COUNT(*) as count FROM users').get() as any
if (existingUsers.count === 0) {
  sqlite.exec(`
    INSERT INTO users (id, vk_id, name, email) VALUES
    ('1', '123456', 'Анна Иванова', 'anna@example.com'),
    ('2', NULL, 'Мария Петрова', 'maria@example.com'),
    ('3', '987654', 'Елена Сидорова', 'elena@example.com')
  `)
  console.log('Пользователи добавлены')
}

// Покупки
const existingPurchases = sqlite.prepare('SELECT COUNT(*) as count FROM purchases').get() as any
if (existingPurchases.count === 0) {
  sqlite.exec(`
    INSERT INTO purchases (id, user_id, course_id, amount, status) VALUES
    ('1', '1', '1', 15000, 'paid'),
    ('2', '2', '3', 12000, 'paid'),
    ('3', '3', '2', 25000, 'paid')
  `)
  console.log('Покупки добавлены')
}

console.log('База данных инициализирована!')
