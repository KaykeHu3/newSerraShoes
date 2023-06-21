import styled from 'styled-components'

const LogoContainer = styled.p`
    color: #FFFFFF;
    font-size: 36px;
`

const Strong = styled.strong`
    color: #d6341e;
`

export default function Logo () {
    return(
        <LogoContainer><Strong>Só</Strong>Calçados</LogoContainer>
    )
}