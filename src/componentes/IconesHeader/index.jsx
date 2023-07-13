import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import BotaoContainer from '../ButtonSingInUp'

const Icones = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: 35px;
    top: 16px;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 30px;
`

export default function IconesHeader() {
    return(
        <Icones>
            <Icone>
                <Link><img src={sacola} alt='Icone Sacola'/></Link>
            </Icone>
            <Icone>
                <Link to={"login"} style={{textDecoration: "none"}}><BotaoContainer>Login</BotaoContainer></Link>
            </Icone>
        </Icones>
    )
}
