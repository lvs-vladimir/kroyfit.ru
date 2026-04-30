import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

// Роли и разрешения
export const roles = sqliteTable('roles', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description'),
  canViewDashboard: integer('can_view_dashboard', { mode: 'boolean' }).default(false),
  canManageCourses: integer('can_manage_courses', { mode: 'boolean' }).default(false),
  canManageUsers: integer('can_manage_users', { mode: 'boolean' }).default(false),
  canManagePurchases: integer('can_manage_purchases', { mode: 'boolean' }).default(false),
  canManageSettings: integer('can_manage_settings', { mode: 'boolean' }).default(false),
  canManageAdmins: integer('can_manage_admins', { mode: 'boolean' }).default(false),
  canEditPlan: integer('can_edit_plan', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
})

// Администраторы
export const admins = sqliteTable('admins', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  name: text('name').notNull(),
  roleId: text('role_id').references(() => roles.id),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
})

// Пользователи
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  vkId: text('vk_id').unique(),
  name: text('name').notNull(),
  email: text('email'),
  avatar: text('avatar'),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
})

// Курсы
export const courses = sqliteTable('courses', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  fullDescription: text('full_description'),
  price: integer('price').notNull(),
  category: text('category').default('Базовый'),
  difficulty: text('difficulty').default('Начинающий'),
  duration: text('duration'),
  lessonsCount: integer('lessons_count').default(0),
  image: text('image'),
  isPublished: integer('is_published', { mode: 'boolean' }).default(false),
  vkGroupId: text('vk_group_id'),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
})

// Покупки
export const purchases = sqliteTable('purchases', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  courseId: text('course_id').notNull().references(() => courses.id),
  amount: integer('amount').notNull(),
  status: text('status').default('pending'),
  paymentId: text('payment_id'),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
})

// VK Группы
export const vkGroups = sqliteTable('vk_groups', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  vkId: text('vk_id').notNull(),
  courseSlug: text('course_slug').notNull(),
  token: text('token').notNull(),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
})
