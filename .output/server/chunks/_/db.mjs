import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
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

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  admins: admins,
  courses: courses,
  purchases: purchases,
  roles: roles,
  users: users,
  vkGroups: vkGroups
}, Symbol.toStringTag, { value: 'Module' }));

const sqlite = new Database("kroyfit.db");
const db = drizzle(sqlite, { schema });

export { admins as a, courses as c, db as d, purchases as p, roles as r, users as u, vkGroups as v };
//# sourceMappingURL=db.mjs.map
