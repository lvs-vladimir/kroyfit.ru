import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { resolve } from 'path'
import * as schema from './schema'

const DB_PATH = resolve(process.cwd(), 'kroyfit.db')
console.log('📁 [DB] Путь к БД:', DB_PATH)
const sqlite = new Database(DB_PATH)
export const db = drizzle(sqlite, { schema })
