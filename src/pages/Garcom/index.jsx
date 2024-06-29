import Login from "@/pages/Login";
import CadastroPedidos from "../../components/CadastroPedidos";
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