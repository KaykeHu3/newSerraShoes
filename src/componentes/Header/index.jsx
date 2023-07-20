import styled from 'styled-components'
import Logo from '../Logo'
import IconesHeader from '../IconesHeader'
import Pesquisa from '../Pesquisa'

const HeaderContainer = styled.header`

    background-color: #e1e1e1;
    background: linear-gradient(to left, #2644ce, #19187e);
    display: flex;
    justify-content: center;
    padding: 15px 0;
    box-shadow: 0 2px 100px 0 rgba(0, 0, 0, 0.2);
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