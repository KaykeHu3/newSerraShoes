import styled from 'styled-components';
import Tenis from "../../imagens/CarouselProduct/imagem2.jpg"

const Produtos = styled.div`
    display: flex;
`

const ProdutoCaixa = styled.div`
    padding: 10px;
    margin: 10px;
    width: 300px;
    background-color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 16px;
    flex: none;
`

const ProdutoImg = styled.img`
    width: 280px;
    height: 280px;
`

const ItemInfo = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
`

const Name = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: #1e1e1e;
`

const Grade = styled.div`
    font-weight: 600;
    margin: 10px 0;
`

const Preco = styled.span`
    font-weight: bold;
    font-size: 18px;
    background-color: #19187e;
    color: white;
    border-radius: 12px;
    padding: 5px 0;
    margin: 5px 0;
`

export default function CardProduto () {
    return(
        <Produtos>
            <ProdutoCaixa>
                <ProdutoImg src={Tenis} alt="Foto Produto"/>
                <ItemInfo>
                    <Name>
                        Tênis Jogger
                    </Name>
                    <Grade>
                        34/35/36/37
                    </Grade>
                    <Preco>
                        R$199,99
                    </Preco>
                </ItemInfo>
            </ProdutoCaixa>
            <ProdutoCaixa>
                <ProdutoImg src={Tenis} alt="Foto Produto"/>
                <ItemInfo>
                    <Name>
                        Tênis Jogger
                    </Name>
                    <Grade>
                        34/35/36/37
                    </Grade>
                    <Preco>
                        R$199,99
                    </Preco>
                </ItemInfo>
            </ProdutoCaixa>
        </Produtos>
    )
}