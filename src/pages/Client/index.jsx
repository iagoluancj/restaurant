import Login from "@/components/Login";
import RenderPedidos from "../RenderPedidos";
import Cardapio from "@/components/Cardapio";
import Cart from "@/components/Cart";

export default function Client() {
    return (
        <>
            <Cardapio />
            <br />
            <Cart />
        </>
    )
}