// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { token } = req.body;
//   // Aqui você deve adicionar a lógica para verificar se o token é válido
//   // const isValidToken = await verifyToken(token); // Implementar verifyToken

//   if (!token) {
//     res.status(200).json({ message: true });
//   } else {
//     res.status(400).json({ error: 'Token inválido ou expirado' });
//   }
// }

// // Simulação de função para verificar o token
// // async function verifyToken(token) {
// //   const currentToken = getCurrentToken()

// //   if (token === currentToken) {
// //     return true
// //   } else {
// //     return false
// //   }
// // }

// // PORQUE O currentToken fica como undefined aqui e em VerifyPage mas age corretamente o index.jsx? 