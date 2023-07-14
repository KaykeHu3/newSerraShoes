import React from "react";
import styled from 'styled-components';
import tenis from '../../imagens/CarouselProduct/imagem2.jpg';

const CarrosselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
`

const Carousel = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    width: 900px;
    height: 150px;
`

const ItensCarousel = styled.div`
    display: flex;
    padding: 20px;
`

const ImagemProduto = styled.img`
    width: 100px;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
`

export default function Carrossel () {
    return(
        <>
        <CarrosselContainer>
            <Carousel>
                    <ItensCarousel>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                        <ImagemProduto src={tenis} alt="Tênis"/>
                    </ItensCarousel>
            </Carousel>
        </CarrosselContainer>
        </>
    )
}