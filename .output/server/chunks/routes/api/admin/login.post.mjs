import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const admins = [
  {
    id: "1",
    email: "admin@kroyfit.ru",
    password: "admin123456",
    // В реальности должен быть хеш
    name: "Admin",
    role: "admin"
  }
];
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Email \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B"
    });
  }
  const admin = admins.find((a) => a.email === email && a.password === password);
  if (!admin) {
    throw createError({
      statusCode: 401,
      message: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430"
    });
  }
  const token = Buffer.from(`${admin.id}:${admin.email}:${Date.now()}`).toString("base64");
  return {
    token,
    user: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role
    }
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
