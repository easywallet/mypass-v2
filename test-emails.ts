import fs from 'fs';
import * as templates from './src/lib/email-templates';

fs.writeFileSync('test-dev-confirm.html',
    templates.getDeveloperConfirmationEmail({
        nome: 'Teste Visual'
    }));
fs.writeFileSync('test-dev-alert.html',
    templates.getDeveloperInternalAlertEmail({
        nome: 'Teste Visual',
        email: 'sandbox@mypass.com.br',
        empresa: 'MyPass',
        github: '@mypass',
        segmento: 'Fintech',
        tipos_integracao: ['KYC'],
        created_at: new Date().toISOString()
    }));
console.log('Templates gerados. Abrir no browser para revisar.');
