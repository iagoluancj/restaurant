import CadastroPedidos from "@/components/CadastroPedidos";
import Cardapio from "@/components/Cardapio";
import RenderPedidos from "../../components/RenderPedidos";
import userAuth from "@/Utils/userAuth";

function Garcom() {
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

export default userAuth(Garcom);