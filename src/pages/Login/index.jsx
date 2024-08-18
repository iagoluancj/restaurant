import { DivInfoDatas, DivLogin, HeaderContainerColor, HeaderLogin, Icon, IconAndInput, DivButtons, InfoData, SubmitAcess, TitleData, Waiter } from "./styles";
import { FiPhone, FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import { LuConciergeBell } from "react-icons/lu";
import { GrRestaurant } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useStore } from "@/stores/cartStore";
import Router from "next/router";

export default function Login() {
    const { logins, addLogin, setRevistClient } = useStore(); // Obtém addLogin do estado Zustand
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    })

    const [currentTelephone, setCurrentTelephone] = useState(false);

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

        if (currentTelephone) {
            setRevistClient(0)
        } else {
            addLogin(formData);
            setRevistClient(1)
        }

        setFormData({
            nome: '',
            email: '',
            telefone: ''
        });

    };

    const submitEmail = () => {
        const response = fetch('http://localhost:3001/enviar-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ email: 'iago.luancj@gmail.com' }), 
        });
    }

    useEffect(() => {
        let telefoneJaCadastrado = false;

        logins.forEach((login) => {
            if (formData.telefone === login.telefone) {
                telefoneJaCadastrado = true;
            }
        })

        setCurrentTelephone(telefoneJaCadastrado);

    }, [formData.telefone, logins, formData.email]);

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
                            required={true}
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
                <Waiter onClick={submitEmail}>
                    <Icon>
                        <GrRestaurant />
                    </Icon>
                    <div>Sou Funcionário</div>
                </Waiter>
            </DivButtons>
        </DivLogin>
    )
}

// PROXIMOS PASSOS:
// - Ajustar formulário para o campo correto. 