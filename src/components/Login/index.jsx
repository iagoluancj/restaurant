import { DivInfoDatas, DivLogin, HeaderContainerColor, HeaderLogin, Icon, IconAndInput, DivButtons, InfoData, SubmitAcess, TitleData, Waiter } from "./styles";
import { FiPhone, FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import { LuConciergeBell } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
    const submitFrom = () => {
        console.log('aa')
    }

    return (
        <DivLogin>
            <HeaderLogin>
                <HeaderContainerColor></HeaderContainerColor>
                <span>Para continuar precisaremos de alguns dados</span>
            </HeaderLogin>
            <DivInfoDatas>
                <InfoData>
                    <TitleData>Name</TitleData>
                    <IconAndInput>
                        <Icon>
                            <FiUser />
                        </Icon>
                        <input type="text" placeholder="Informe o seu nome completo" />
                    </IconAndInput>
                </InfoData>
                <InfoData>
                    <TitleData>E-mail</TitleData>
                    <IconAndInput>
                        <Icon>
                            <MdOutlineMail />
                        </Icon>
                        <input type="text" placeholder="Informe o seu melhor email" />
                    </IconAndInput>
                </InfoData>
                <InfoData>
                    <TitleData>Telefone <span>(Obrigatorio)</span></TitleData>
                    <IconAndInput>
                        <Icon>
                            <FiPhone />
                        </Icon>
                        <input type="text" placeholder="Informe o telefone" required='true' />
                    </IconAndInput>
                </InfoData>
            </DivInfoDatas>
            <DivButtons>
                <SubmitAcess>
                    <Icon>
                        <IoEnterOutline />
                    </Icon>
                    <div onClick={() => submitFrom()}>Continuar</div>
                </SubmitAcess>

                <Waiter>
                    <Icon>
                        <LuConciergeBell />
                    </Icon>
                    <div>Garçom</div>
                </Waiter>

                <TitleData>É funcionario? faça login</TitleData>

                <Waiter>
                    <Icon>
                        <FaGoogle />
                    </Icon>
                    <div>Google</div>
                </Waiter>
            </DivButtons>
        </DivLogin>
    )
}