const fs = require('fs');
require('dotenv').config();
const { EMAIL_PASSWORD, EMAIL_USER, EMAIL_HOST, EMAIL_PORT } = process.env;
const { createTransport } = require('nodemailer');
const emailTemplate = fs.readFileSync(__dirname + '/emailTemplate.html', 'utf-8');

const transporter = createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
        pass: EMAIL_PASSWORD,
        user: EMAIL_USER
    }
});

module.exports = async (contact) => {
    const generatedEmail = emailTemplate
        .replace("${contactName}", contact.name)
        .replace("${contactName}", contact.name)
        .replace("${contactEmail}", contact.email)
        .replace("${contactMessage}", contact.message);
    await transporter.sendMail({
        from: `no-reply@wtfranco22.com`,
        to: `${contact.email}`,
        subject: 'Notificación de contacto',
        html: generatedEmail
    });
};