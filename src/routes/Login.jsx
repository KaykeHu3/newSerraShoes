import CardLogin from "../componentes/CardLogin";
import BotaoContainer from "../componentes/LoginButton";
import styled from "styled-components"

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    margin-top: 200px;
`

const BotaoLogar = styled(BotaoContainer)`
    font-size: 20px;
    width: 80px;
    padding: 10px 0;
`

export default function Login () {
    return(
        <LoginContainer>
            <CardLogin />
            <BotaoLogar>Logar</BotaoLogar>
        </LoginContainer>
    )
}