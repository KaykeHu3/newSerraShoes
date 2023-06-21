import sacola from '../../imagens/sacola.svg'
import user from '../../imagens/user.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
    position: absolute;
    right: 20px;
    height: 70px; 
    cursor: pointer;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icones = [sacola, user]

export default function IconesHeader() {
    return(
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone} alt="Icone"></img></Icone>
            ))}
        </Icones>
    )
}
