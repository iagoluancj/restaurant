import Link from "next/link";

export default function RenderPedidos() {
    return (
        <>
            <div>Fila de pedidos: </div>
            Pedidos recebidos: 
            <div>
                <div>Numero pedido: </div>
                <div>Status: </div>
                <div>Nome do cliente</div>
                <div>nome do garçom</div>
                <div>nome do prato</div>
                <div>observação</div>
                <Link href="/Pedidos"></Link>
            </div>
        </>
    )
}