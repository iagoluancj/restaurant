import { Children, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const PedidosContext = createContext({
    pedidos: [],
    children: null
})

const initialPedidos = [
    {
        numeroPedido: 1,
        status: "Recebido",
        nomeCliente: "João Silva",
        nomeGarcom: "Carlos Mendes",
        nomePrato: "Feijoada",
        observacao: "Sem coentro"
    },
    {
        numeroPedido: 2,
        status: "Preparando",
        nomeCliente: "Maria Oliveira",
        nomeGarcom: "Ana Souza",
        nomePrato: "Moqueca",
        observacao: "Com bastante dendê"
    },
    {
        numeroPedido: 3,
        status: "Entregue",
        nomeCliente: "Pedro Santos",
        nomeGarcom: "Luiz Ferreira",
        nomePrato: "Vatapá",
        observacao: "Pouca pimenta"
    }
];

const PedidosProvider = ({ children }) => {
    const [allPedidos, setAllPedidos] = useState(initialPedidos)
    
    console.log(allPedidos)
    // useEffect(() => {
    //     console.log(allPedidos)
    // })

    return (
        <PedidosContext.Provider value={{ pedidos: allPedidos }}>
            {children}
        </PedidosContext.Provider>
    )
}

export default PedidosProvider