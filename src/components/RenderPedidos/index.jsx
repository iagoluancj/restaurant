import Link from "next/link";

export default function RenderPedidos() {
    return (
        <>
            <div>Fila de pedidos:</div>
            Pedidos recebidos (carrosel de pedidos simplificados aqui)
            <div>
                <ul>
                    <li >
                        <p>Numero do Pedido: { }</p>
                        <p>Status: { }</p>
                        <p>Nome do Cliente: { }</p>
                        <p>Nome do Garçom: { }</p>
                        <p>Nome do Prato: { }</p>
                        <p>Observação: { }</p>
                    </li>

                </ul>
                <Link href="/">Voltar</Link>
            </div>
        </>
    )
}