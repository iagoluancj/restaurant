// import { EmailTemplate } from '@/components/Email/template';
// import { useStore } from '@/stores/cartStore';
// import { Resend } from 'resend';


// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req, res) => {
//     // const { logins } = useStore();

//     const { data, error } = await resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: ['iagoestudoslcj@gmail.com'], // logins.email here
//         subject: 'Hello world',
//         react: EmailTemplate({ firstName: 'John' }),
//     });

//     if (error) {
//         return res.status(400).json(error);
//     }

//     res.status(200).json(data);
// };

// pages/api/send-email.js

// ESSE PORRA AQUI FAZ SOMENTE O ENVIO DO EMAIL. 

import { generateEmailHtml } from '@/components/Email/template';
import { Resend } from 'resend';

const resend = new Resend('re_fuTUNqEs_68KuczZYrb7AFaoaz3U7qo3E'); // por algum motivo começou a apresentar erro aqui, nada foi mudado, nem mesmo no .env, analsiar depois

export default async (req, res) => {
    try {
        // Verifique se o método HTTP é POST
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        const { authToken } = req.body;
        // Enviar o e-mail usando a API do Resend
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'iagoestudoslcj@gmail.com',
            subject: 'Welcome to Acme!',
            html: generateEmailHtml({ firstName: 'Iago', Token: authToken }), // Use `html` para enviar o template
        });

        if (error) {
            return res.status(400).json(error);
        }

        res.status(200).json(data);
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
