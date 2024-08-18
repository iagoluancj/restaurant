import userAuth from "@/Utils/userAuth";
import RenderPedidos from "../../components/RenderPedidos";

function Cozinha() {
    return (
        <>
            <RenderPedidos />
            <br />
            Cozinha
        </>
    )
}

export default userAuth(Cozinha);
