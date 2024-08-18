import Cardapio from "@/components/Cardapio";
import Cart from "@/components/Cart";
import { useStore } from "@/stores/cartStore";
import Router from "next/router";
import { useEffect } from "react";

export default function Client() {
    const { revistClient, setRevistClient } = useStore(); // Obtém addLogin do estado Zustand

    const returnToLogin = () => {
        Router.push('/Login');
    }

    const statusRevistClient = (statusClient) => {
        if (statusClient === 0) {
            return true
        } else if (statusClient === 1) {
            return false
        } else {
            return 'Acesso não autorizado'
        }
    }

    const statusClient = statusRevistClient(revistClient)
    console.log(statusClient)

    if (typeof statusClient === 'string') {
        return <span>
                    {statusClient}
                    <p><button onClick={returnToLogin}>To Login</button></p>
                </span>;
    }


    return (
        <>
            {statusClient ? <span>Olá de volta</span> : <span>Seja bem-vindo</span>}

            <Cardapio />
            <br />
            <Cart />
            <button onClick={returnToLogin}>Sair</button>
        </>
    )
}

