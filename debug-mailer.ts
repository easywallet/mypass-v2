import { config } from 'dotenv';
config({ path: '.env.local' });

import { noreplyTransporter, NOTIFY_EMAIL } from './src/lib/mailer';
import { getDeveloperConfirmationEmail } from './src/lib/email-templates';

async function testMailer() {
    console.log('Testing SMTP connection with ENV VARS...');

    console.log('Host:', process.env.SMTP_HOST);
    console.log('Port:', process.env.SMTP_PORT);
    console.log('Secure:', process.env.SMTP_SECURE);
    console.log('User:', process.env.SMTP_USER_NOREPLY);

    try {
        const html = getDeveloperConfirmationEmail({ nome: 'Teste Debug' });
        const info = await noreplyTransporter.sendMail({
            from: '"MyPass" <noreply@mypass.com.br>',
            to: NOTIFY_EMAIL,
            subject: 'Teste Debug',
            html: html,
        });
        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('SMTP Error:', error);
    }
}

testMailer();
