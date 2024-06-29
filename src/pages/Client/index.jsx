import Cardapio from "@/components/Cardapio";
import Cart from "@/components/Cart";
import { useStore } from "@/stores/cartStore";
import Router from "next/router";

export default function Client() {
    const { revistClient } = useStore(); // Obtém addLogin do estado Zustand

    const returnToLogin = () => {
        Router.push('/Login');
    }

    return (
        <>
            {
                revistClient ? <span>Olá de volta</span> : <span>Seja bem vindo</span>
                
            }
            <Cardapio />
            <br />
            <Cart />
            <button onClick={returnToLogin}>Sair</button>
        </>
    )
}