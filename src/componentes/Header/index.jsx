import styled from 'styled-components'
import Logo from '../Logo'
import IconesHeader from '../IconesHeader'
import Pesquisa from '../Pesquisa'

const HeaderContainer = styled.header`
    background: linear-gradient(to left, #2644ce, #19187e);
    display: flex;
    justify-content: center;
    padding: 15px 0;
`

export default function Header () {
    return(
        <HeaderContainer>
            <Logo />
            <Pesquisa />
            <IconesHeader />
        </HeaderContainer>
    )
}