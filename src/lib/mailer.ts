import nodemailer from 'nodemailer';

export const noreplyTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER_NOREPLY,
        pass: process.env.SMTP_PASS_NOREPLY,
    },
});

export const sandboxTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER_SANDBOX,
        pass: process.env.SMTP_PASS_SANDBOX,
    },
});

export const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'sandbox@mypass.com.br';
