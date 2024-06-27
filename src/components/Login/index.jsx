import { DivInfoDatas, DivLogin, HeaderContainerColor, HeaderLogin, Icon, IconAndInput, DivButtons, InfoData, SubmitAcess, TitleData, Waiter } from "./styles";
import { FiPhone, FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import { LuConciergeBell } from "react-icons/lu";
import { GrRestaurant } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useClient, useStore } from "@/stores/cartStore";
import Router from "next/router";

export default function Login() {
    const { logins, addLogin, setRevistClient, revistClient } = useStore(); // Obtém addLogin do estado Zustand
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    })

    const [currentTelephone, setCurrentTelephone] = useState(false);


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
        Router.push('/Client');


        // Lógica para decidir se salvar os dados ou não
        if (currentTelephone) {
            console.log('Telefone JÁ cadastrado');
            setRevistClient(true)
        } else {
            // data not already present, safe to save
            addLogin(formData);
            console.log('Telefone NÃO cadastrado');
            setRevistClient(false)
        }

        // clear form
        setFormData({
            nome: '',
            email: '',
            telefone: ''
        });

    };

    useEffect(() => {
        let telefoneJaCadastrado = false;

        logins.forEach((login) => {
            if (formData.telefone === login.telefone) {
                telefoneJaCadastrado = true;
            }
        });

        setCurrentTelephone(telefoneJaCadastrado);

    }, [formData.telefone, logins]);

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
                            type="number"
                            placeholder="Informe o telefone ex: (00) 0 0000-0000"
                            value={formData.telefone}
                            onChange={handleChange}
                            required='true'
                            name="telefone" />
                    </IconAndInput>
                </InfoData>
                <SubmitAcess type="submit">
                    <Icon>
                        <IoEnterOutline />
                    </Icon>
                    <div>Continuar acesso</div>
                </SubmitAcess>
            </DivInfoDatas>
            <DivButtons>
                <Waiter>
                    <Icon>
                        <LuConciergeBell />
                    </Icon>
                    <div>Chamar Garçom</div>
                </Waiter>
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