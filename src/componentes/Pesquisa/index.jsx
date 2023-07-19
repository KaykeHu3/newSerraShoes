import styled from 'styled-components'
import search from '../../imagens/search.svg'
import Input from '../Input'

const PesquisaContainer = styled.section`
    text-align: center;
    color: transparent;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin: 0 30px;
`

const Search = styled.img`
    margin: 0 10px;
    cursor: pointer;
`

export default function Pesquisa () {
    return(
        <PesquisaContainer>
            <Input 
                placeholder='Nome do Produto'
            />
            <Search src={search} alt="Icone de Pesquisa"/>
        </PesquisaContainer>
    )
}