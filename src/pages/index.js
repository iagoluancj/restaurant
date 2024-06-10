import Cadastro from "@/components/Pedidos/CadastroPedidos";
import Login from "@/components/Login";
import Pedidos from "@/components/Pedidos/RenderPedidos";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />
      <div>
        <h3>Estrutura do projeto:</h3>
        <ul>
          <h3>FULL MOBILE</h3>
          <li>Dispositivo da cozinha:
            <ul>
              <ol> - Necessário login para acessar</ol>
              <ol> - Tela com pedidos recebidos</ol>
              <ol> - Status dos pedidos - (em fila, em andamento, pronto, cancelado)</ol>
              <ol> - O pedido em si (nome cliente, nome garçom, nome do prato, observações, hora do pedido)</ol>
              <ol></ol>
            </ul>
          </li>
          <li>Dispositivo do garçom:
            <ul>
              <ol> - Necessário login para acessar</ol>
              <ol> - Tela para cadastrar pedidos</ol>
              <ol> - Cardapio</ol>
              <ol> - O pedido em si (nome cliente, nome garçom, nome do prato, observações, hora do pedido)</ol>
            </ul>
          </li>
          <li>Dispositivo do cliente:
            <ul>
              <ol> - Cardapio</ol>
              <ol> - Acessa sem login (recebe invite unico vinculado ao CPF ou numero)</ol>
              <ol> - Acompanhar pedido</ol>
            </ul>
          </li>
        </ul>
      </div>
      <span>Geral que eu preciso fazer: ROUTER</span>
      <Cadastro />
    </main>
  );
}
