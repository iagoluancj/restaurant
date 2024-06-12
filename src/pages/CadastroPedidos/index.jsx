import Link from "next/link";

export default function CadastroPedidos() {
    return (
        <>
            <form>    
                    <p>Numero do Pedido: gera autmatico</p>       
                    <p>Status: checkbox</p>
                    <p>Nome do Cliente: <input type="text" /> </p>
                    <p>Nome do Garçom: checkbox</p>
                    <p>Nome do Prato: checkbox</p>
                    <p>Observação: <textarea name="" id=""></textarea></p>
            </form>
            <button>submit</button>
            <Link href="/">Voltar</Link>

        </>
    )
}