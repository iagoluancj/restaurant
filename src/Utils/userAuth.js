import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function userAuth(Component) {
    return function AuthenticatedComponent(props) {
        const router = useRouter();
        const { token } = router.query;
        const [loading, setLoading] = useState(true);
        const [isValid, setIsValid] = useState(false);

        useEffect(() => {
            const savedToken = localStorage.getItem('authToken');
            if (savedToken) {
                fetch(`http://localhost:3001/validar-token?token=${savedToken}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.error) {
                            router.push(`/${savedToken}`); // Redireciona para uma página de erro se o token for inválido.
                        } else {
                            setIsValid(true); // Permite o acesso à rota.
                        }
                    })
                    .finally(() => setLoading(false));
            } else if (router.isReady) {
                // Se o router estiver pronto e não houver token, redirecione para o login
                router.push('/login');
            }
        }, [token, router.isReady]); // Verifica a query e o estado do router

        if (loading) {
            return <div>Validando token...</div>;
        }

        return isValid ? <Component {...props} /> : null;
    };
}

export default userAuth;
