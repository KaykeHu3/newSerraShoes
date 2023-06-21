import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap';
import styled from 'styled-components'

const Roladinha = styled.div`
    color: #FFF;
    background-color: #000;
    display: block;
    text-align: center;
    width: 700;
    height: 700;
    font-size: 76px;
    padding: 30;
`

export default function Carrossel () {
    return(
        <Roladinha>
            <Carousel>
                <CarouselItem>
                    <p>Rola</p>
                </CarouselItem>
                <CarouselItem>
                    <p>Pingola</p>
                </CarouselItem>
                <CarouselItem>
                    <p>Jaca</p>
                </CarouselItem>
                <CarouselItem>
                    <p>Piru</p>
                </CarouselItem>
                <CarouselItem>
                    <p>Kleber</p>
                </CarouselItem>
            </Carousel>
        </Roladinha>
    )
}