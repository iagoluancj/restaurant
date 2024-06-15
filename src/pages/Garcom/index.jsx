import Login from "@/components/Login";
import CadastroPedidos from "../CadastroPedidos";
import Cardapio from "@/components/Cardapio";
import RenderPedidos from "../RenderPedidos";

export default function Garcom() {
    return (
        <>
            <CadastroPedidos />
            <br />
            <Cardapio />
            <br />
            <RenderPedidos />
        </>
    )
}