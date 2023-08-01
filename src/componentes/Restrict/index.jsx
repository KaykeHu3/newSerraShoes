import styled from 'styled-components';
import AddIcon from '../../imagens/add.svg';
import {Link} from "react-router-dom";

const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    min-height: 88vh;
`

const ContainerTop = styled.div`
    display: flex;
`

const TituloCadastro = styled.h1`
    color: #000;
    background-color: #e1e1e1;
    margin-bottom: 7px;
    position: relative;
    right: 450px;
`

const AddImg = styled.img`
    display: flex;
    position: relative;
    left: 450px;
    &:hover{
        cursor: pointer;
    }
`

const ProdutosContainer = styled.div`
    background-color: #5c5c5c;
    width: 70vw;
    border-radius: 10px;
    padding: 2px 0 4px 10px;
`

export default function CadastroProduto () {
    return(
        <CadastroContainer>
            <ContainerTop>
                <TituloCadastro>Cadastre seus Produtos</TituloCadastro>
                <Link to={"/produtoscadastro"}><AddImg src={AddIcon} /></Link>
            </ContainerTop>
            <ProdutosContainer>
                <h1>Produto</h1>
            </ProdutosContainer>
        </CadastroContainer>
    )
}