import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoContainer = styled.p`
    color: #fff;
    font-size: 36px;
    position: absolute;
    left: 40px;
    top: 8px;
`

const Strong = styled.strong`
    color: #d6341e;
`

export default function Logo () {
    return(
        <Link to="/"><LogoContainer><Strong>Só</Strong>Calçados</LogoContainer></Link>
    )
}