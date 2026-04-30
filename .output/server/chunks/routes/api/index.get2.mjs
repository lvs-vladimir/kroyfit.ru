import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { d as db, u as users } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'path';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';

const index_get = defineEventHandler(async () => {
  try {
    const allUsers = await db.select().from(users);
    return { success: true, users: allUsers };
  } catch (e) {
    return { success: true, users: [] };
  }
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
