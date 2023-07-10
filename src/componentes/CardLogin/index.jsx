import styled from 'styled-components';
import {Link} from 'react-router-dom'

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e1e1e1;
    width: 500px;
    align-items: center;
`

const Input = styled.input`
    width: 75%;
    padding: 10px 0 10px 10px;
    margin-top: 15px;
`

const Cadastrese = styled.p`
    color: #0087c5;
    padding-bottom: 15px;
`

export default function CardLogin () {
    return (
        <InputContainer>
            <h1>Login</h1>
            <Input placeholder="Digite seu E-Mail"/>
            <Input placeholder="Digite sua senha"/>
            <p>Não tem uma conta? <Link to={"cadastro"} style={{textDecoration: "none"}}><Cadastrese>Cadastre-se</Cadastrese></Link></p>
        </InputContainer>
    )
}