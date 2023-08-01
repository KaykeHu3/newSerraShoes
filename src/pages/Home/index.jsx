import styled from 'styled-components'
import Categorias from '../../componentes/Categorias';
import Carrossel from '../../componentes/Carrossel';
import CardProduto from '../../componentes/CardProduto';

const HomeContainer = styled.div`

`

export default function Home () {
    return(
        <HomeContainer>
            <Categorias />
            <Carrossel />
            <CardProduto />
        </HomeContainer>
    )
}