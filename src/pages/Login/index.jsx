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

    // const emails = [
    //     'iago',
    //     'iago2',
    //     'seilá'
    // ]

    const [emailsFunc, setEmailsfunc] = useState(['iago', 'luan'])

    const [funcionario, setFuncionario] = useState(false);
    const [currentTelephone, setCurrentTelephone] = useState(false);

    // monitoring changes in the form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    if (funcionario) {
        console.log('abrir modal', emailsFunc, funcionario)
    } else {
        console.log('erro mano', emailsFunc, funcionario)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Router.push('/Client');


        // Lógica para decidir se salvar os dados ou não
        if (currentTelephone) {
            setRevistClient(true)
        } else {
            // data not already present, safe to save
            addLogin(formData);
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
        let funcionarioCadastrado = false

        logins.forEach((login) => {
            if (formData.telefone === login.telefone) {
                telefoneJaCadastrado = true;
            }
        })

        emailsFunc.forEach((email) => {
            if (email === formData.email) {
                console.log(email, "console log emailsfunc useEffect")
                funcionarioCadastrado = true;
            }
        })

        // Preciso filtrar o emailsFunc, que é onde está armazenado os emails, 
        // e comparar com o atual formDataEmail, e caso seja verdadeiro, ai sim colcar o funconario true

        setFuncionario(funcionarioCadastrado)
        setCurrentTelephone(telefoneJaCadastrado);

    }, [formData.telefone, logins, emailsFunc, formData.email, funcionario]);

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