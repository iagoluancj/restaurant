import { DivInfoDatas, DivLogin, HeaderContainerColor, HeaderLogin, Icon, IconAndInput, DivButtons, InfoData, SubmitAcess, TitleData, Waiter } from "./styles";
import { FiPhone, FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import { LuConciergeBell } from "react-icons/lu";
import { GrRestaurant } from "react-icons/gr";
import { useState } from "react";
import { useStore } from "@/stores/cartStore";

export default function Login() {
    const { logins, addLogin } = useStore(); // Obtém addLogin do estado Zustand
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    })

    // monitoring changes in the form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // data saved in global state, will be sent to database
        addLogin(formData);

        // clear form
        setFormData({
            nome: '',
            email: '',
            telefone: ''
        });
    };

    return (
        <DivLogin>
            <HeaderLogin>
                <HeaderContainerColor></HeaderContainerColor>
                <span>Para continuar precisaremos de alguns dados</span>
            </HeaderLogin>
            <DivInfoDatas onSubmit={handleSubmit}>
                <InfoData>
                    <label><TitleData>Name</TitleData></label>
                    <IconAndInput>
                        <Icon>
                            <FiUser />
                        </Icon>
                        <input
                            type="text"
                            placeholder="Informe o seu nome completo"
                            value={formData.nome}
                            onChange={handleChange}
                            name="nome" />
                    </IconAndInput>
                </InfoData>
                <InfoData>
                    <label><TitleData>E-mail</TitleData></label>
                    <IconAndInput>
                        <Icon>
                            <MdOutlineMail />
                        </Icon>
                        <input
                            type="text"
                            placeholder="Informe o seu melhor email"
                            value={formData.email}
                            onChange={handleChange}
                            name="email" />
                    </IconAndInput>
                </InfoData>
                <InfoData>
                    <label><TitleData>Telefone <span>(Obrigatorio)</span></TitleData></label>
                    <IconAndInput>
                        <Icon>
                            <FiPhone />
                        </Icon>
                        <input
                            type="text"
                            placeholder="Informe o telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            required='true'
                            name="telefone" />
                    </IconAndInput>
                </InfoData>
                <button type="submit">Continuar acesso</button>
            </DivInfoDatas>
            <DivButtons>
                <SubmitAcess>
                    <Icon>
                        <IoEnterOutline />
                    </Icon>
                </SubmitAcess>

                <Waiter>
                    <Icon>
                        <LuConciergeBell />
                    </Icon>
                    <div>Chamar Garçom</div>
                </Waiter>
                {/* <Waiter onClick={() => clickedLogin()} clicked={clicked}>
                    <Icon>
                        <FaGoogle />
                    </Icon>
                    <div>Sign in with Google 🚀</div>
                </Waiter> */}
                <TitleData>É funcionario?</TitleData>
                <Waiter>
                    <Icon>
                        <GrRestaurant />
                    </Icon>
                    <div>Funcionário</div>
                </Waiter>
            </DivButtons>
            {/* <Link href="/RenderPedidos">Pedidos</Link>
            <Link href="/CadastroPedidos">Cadastro</Link> */}
        </DivLogin>
    )
}