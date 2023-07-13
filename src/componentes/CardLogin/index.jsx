import {Link} from 'react-router-dom'
import { Input, InputContainer, Cadastrese} from '../InputContainer'
import styled from 'styled-components';

const ParagrafoLogin = styled.p`
    margin: 15px
`

export default function CardLogin () {
    return (
        <InputContainer>
            <h1>Login</h1>
            <Input placeholder="Digite seu E-Mail"/>
            <Input placeholder="Digite sua senha"/>
            <ParagrafoLogin>Não tem uma conta? <Link to={"cadastro"} style={{textDecoration: "none"}}><Cadastrese>Cadastre-se</Cadastrese></Link></ParagrafoLogin>
        </InputContainer>
    )
}