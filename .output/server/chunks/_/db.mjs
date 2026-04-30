import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { resolve } from 'path';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

const roles = sqliteTable("roles", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  canViewDashboard: integer("can_view_dashboard", { mode: "boolean" }).default(false),
  canManageCourses: integer("can_manage_courses", { mode: "boolean" }).default(false),
  canManageUsers: integer("can_manage_users", { mode: "boolean" }).default(false),
  canManagePurchases: integer("can_manage_purchases", { mode: "boolean" }).default(false),
  canManageSettings: integer("can_manage_settings", { mode: "boolean" }).default(false),
  canManageAdmins: integer("can_manage_admins", { mode: "boolean" }).default(false),
  canEditPlan: integer("can_edit_plan", { mode: "boolean" }).default(false),
  // Детальные права на вкладки настроек
  canManageProfile: integer("can_manage_profile", { mode: "boolean" }).default(false),
  canManageRoles: integer("can_manage_roles", { mode: "boolean" }).default(false),
  canManageVkGroups: integer("can_manage_vk_groups", { mode: "boolean" }).default(false),
  canManageEmail: integer("can_manage_email", { mode: "boolean" }).default(false),
  canManageSeo: integer("can_manage_seo", { mode: "boolean" }).default(false),
  canManageGeneralSettings: integer("can_manage_general_settings", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const admins = sqliteTable("admins", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  roleId: text("role_id").references(() => roles.id),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  vkId: text("vk_id").unique(),
  name: text("name").notNull(),
  email: text("email"),
  avatar: text("avatar"),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const courses = sqliteTable("courses", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  fullDescription: text("full_description"),
  price: integer("price").notNull(),
  category: text("category").default("\u0411\u0430\u0437\u043E\u0432\u044B\u0439"),
  difficulty: text("difficulty").default("\u041D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439"),
  duration: text("duration"),
  lessonsCount: integer("lessons_count").default(0),
  image: text("image"),
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  vkGroupId: text("vk_group_id"),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const purchases = sqliteTable("purchases", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  courseId: text("course_id").notNull().references(() => courses.id),
  amount: integer("amount").notNull(),
  status: text("status").default("pending"),
  paymentId: text("payment_id"),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const vkGroups = sqliteTable("vk_groups", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  vkId: text("vk_id").notNull(),
  courseSlug: text("course_slug").notNull(),
  token: text("token").notNull(),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const emailSettings = sqliteTable("email_settings", {
  id: integer("id").primaryKey(),
  smtpHost: text("smtp_host").notNull().default("smtp.gmail.com"),
  smtpPort: integer("smtp_port").notNull().default(587),
  smtpUser: text("smtp_user").notNull().default(""),
  smtpPass: text("smtp_pass").notNull().default(""),
  smtpFrom: text("smtp_from").notNull().default("noreply@kroyfit.ru"),
  enableWelcome: integer("enable_welcome").notNull().default(1),
  enablePurchase: integer("enable_purchase").notNull().default(1),
  enableVkGroup: integer("enable_vk_group").notNull().default(1),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`)
});
const seoSettings = sqliteTable("seo_settings", {
  id: integer("id").primaryKey(),
  title: text("title").notNull().default("\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F"),
  description: text("description").notNull().default("\u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F"),
  keywords: text("keywords").notNull().default("\u043A\u0440\u043E\u0439\u043A\u0430, \u0448\u0438\u0442\u044C\u0435, \u043A\u0443\u0440\u0441\u044B"),
  enableSitemap: integer("enable_sitemap").notNull().default(1),
  enableRobots: integer("enable_robots").notNull().default(1),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`)
});
const generalSettings = sqliteTable("general_settings", {
  id: integer("id").primaryKey(),
  siteName: text("site_name").notNull().default("\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F"),
  adminEmail: text("admin_email").notNull().default(""),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`)
});

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  admins: admins,
  courses: courses,
  emailSettings: emailSettings,
  generalSettings: generalSettings,
  purchases: purchases,
  roles: roles,
  seoSettings: seoSettings,
  users: users,
  vkGroups: vkGroups
}, Symbol.toStringTag, { value: 'Module' }));

const DB_PATH = resolve(process.cwd(), "kroyfit.db");
console.log("\u{1F4C1} [DB] \u041F\u0443\u0442\u044C \u043A \u0411\u0414:", DB_PATH);
const sqlite = new Database(DB_PATH);
const db = drizzle(sqlite, { schema });

export { admins as a, courses as c, db as d, emailSettings as e, generalSettings as g, purchases as p, roles as r, seoSettings as s, users as u, vkGroups as v };
//# sourceMappingURL=db.mjs.map
