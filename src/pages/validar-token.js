import { useStore } from '@/stores/cartStore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ValidarToken() {
  const router = useRouter();
  const { token } = router.query;
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const { emailFuncionare } = useStore()

  useEffect(() => {
    function extractTokenFromUrl(url) {
      const regex = /token=([^&\/]+)/;
      const match = url.match(regex);
      return match ? decodeURIComponent(match[1]) : null;
    }

    function extractEmailFromUrl(url) {
      const regex = /email=([^&]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    }

    if (token) {
      const url = `http://localhost:3001/validar-token?token=${token}`
      const extractedToken = extractTokenFromUrl(url);
      const extractedEmail = extractEmailFromUrl(url);
      const user = emailFuncionare.find(([email]) => email === extractedEmail);

      fetch(`http://localhost:3001/validar-token?token=${extractedToken}`)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            setMessage('Token inválido ou expirado.');
            router.push('/Login'); // Redireciona para login se o token for inválido
          } else {
            setMessage('Token válido. Bem-vindo!');
            localStorage.setItem('authToken', extractedToken); // Armazena o token no localStorage

            if (user) {
              router.push(`/${user[1]}`); // Redireciona para a página baseada na posição do e-mail
            } else {
              router.push('/ErroNoCadastroDeCargoFuncionario'); // Redireciona se o e-mail não for encontrado
            }
          }
        })
        .finally(() => setLoading(false));
    }
  }, [token]);

  if (loading) {
    return <div>Validando token...</div>;
  }

  return (
    <div>
      <h1>Validação de Token</h1>
      <p>{message}</p>
    </div>
  );
}

export default ValidarToken;
