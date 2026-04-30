import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
async function sendEmail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@kroyfit.ru",
      to,
      subject,
      html
    });
    console.log("Email \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 email:", error);
    return { success: false, error };
  }
}
function welcomeEmailTemplate(name) {
  return `
    <h2>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0443 \u041A\u0440\u043E\u044F! \u{1F44B}</h2>
    <p>\u041F\u0440\u0438\u0432\u0435\u0442, ${name}!</p>
    <p>\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E. \u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.</p>
    <p><a href="https://kroyfit.ru/admin">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</a></p>
    <hr>
    <p>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,<br>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0438 \u041A\u0440\u043E\u044F</p>
  `;
}
function purchaseEmailTemplate(name, courseName, amount) {
  return `
    <h2>\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443! \u{1F389}</h2>
    <p>\u041F\u0440\u0438\u0432\u0435\u0442, ${name}!</p>
    <p>\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 \u043A\u0443\u0440\u0441 <strong>${courseName}</strong></p>
    <p><strong>\u0421\u0443\u043C\u043C\u0430:</strong> ${amount} \u20BD</p>
    <p>\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043A\u0443\u0440\u0441\u0443 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D. \u0412\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u0443\u044E VK \u0433\u0440\u0443\u043F\u043F\u0443 \u043A\u0443\u0440\u0441\u0430.</p>
    <p><a href="https://kroyfit.ru/admin">\u041D\u0430\u0447\u0430\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</a></p>
    <hr>
    <p>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,<br>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0438 \u041A\u0440\u043E\u044F</p>
  `;
}
function vkGroupEmailTemplate(name, groupName) {
  return `
    <h2>\u0412\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 VK \u0433\u0440\u0443\u043F\u043F\u0443! \u{1F465}</h2>
    <p>\u041F\u0440\u0438\u0432\u0435\u0442, ${name}!</p>
    <p>\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u0443\u044E VK \u0433\u0440\u0443\u043F\u043F\u0443: <strong>${groupName}</strong></p>
    <p><a href="https://vk.com">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435</a></p>
    <hr>
    <p>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,<br>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0438 \u041A\u0440\u043E\u044F</p>
  `;
}

export { purchaseEmailTemplate as p, sendEmail as s, vkGroupEmailTemplate as v, welcomeEmailTemplate as w };
//# sourceMappingURL=email.mjs.map
