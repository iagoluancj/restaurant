// // ESSE PORRA CHAMA ROTA DE ENVIAR O EMAIL

// //APAGAR

// export const sendMail = async (meuToken) => {
//     try {
//         const response = await fetch('/api/sendMailOld', { // old: fetch('/api/sendMailOld'
//             method: 'POST', 
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ authToken: meuToken }),
//         });

//         if (!response.ok) {
//             throw new Error('Erro ao enviar e-mail');
//         }

//         const data = await response.json();
//         console.log('Resposta da API:', data);

//     } catch (error) {
//         console.error('Erro:', error);
//     }
// };

