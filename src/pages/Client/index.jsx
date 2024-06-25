import Cardapio from "@/components/Cardapio";
import Cart from "@/components/Cart";
import { useStore } from "@/stores/cartStore";

export default function Client() {
    const { revistClient } = useStore(); // Obtém addLogin do estado Zustand


    return (
        <>
            {
                revistClient ? <span>Seja bem vindo</span> : <span>Olá de volta</span>
            }
            {}
            {console.log(revistClient)}
            <Cardapio />
            <br />
            <Cart />
        </>
    )
}