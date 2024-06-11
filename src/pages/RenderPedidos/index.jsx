import { useRequests } from "@/stores/cartStore";
import Link from "next/link";

export default function RenderPedidos() {
    const bears = useRequests((state) => state.bears)

    return (
        <>
            <div>Fila de pedidos:</div>
            Pedidos recebidos:
            <div>
                {bears}
                {/* <ul>
                    {pedidos.map((pedido, index) => (
                        <li key={index}>
                            <p>Numero do Pedido: {pedido.numeroPedido}</p>
                            <p>Status: {pedido.status}</p>
                            <p>Nome do Cliente: {pedido.nomeCliente}</p>
                            <p>Nome do Garçom: {pedido.nomeGarcom}</p>
                            <p>Nome do Prato: {pedido.nomePrato}</p>
                            <p>Observação: {pedido.observacao}</p>
                        </li>
                    ))}
                </ul> */}
                <Link href="/">Voltar</Link>
            </div>
        </>
    )
}