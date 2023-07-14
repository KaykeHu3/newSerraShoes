import { Input, InputContainer } from "../componentes/InputContainer"
import styled from 'styled-components';
import Button from '../componentes/ButtonSingInUp'

const BotaoCadastrar = styled(Button)`
    width: 100px;
    margin-top: 20px;
`

const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    margin-top: 200px;
`

export default function Cadastro () {
    return(
        <CadastroContainer>
            <InputContainer>
                <h1>Cadastre-se</h1>
                <Input placeholder="Digite seu E-Mail"/>
                <Input placeholder="Digite sua senha"/>
                <Input placeholder="Confirme sua senha"/>
                <BotaoCadastrar>Cadastrar</BotaoCadastrar>
            </InputContainer>
        </CadastroContainer>
    )
}