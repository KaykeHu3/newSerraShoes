import styled from 'styled-components';

const BotaoContainer = styled.p`
    text-decoration: none;
    background: #5c5c5c;
    color: white;
    font-weight: bold;
    font-size: 18px;
    width: 58px;
    border-radius: 10px;
    padding: 5px;
    outline: none;
    cursor: pointer;
    transition: 50ms;

    &:active {
        background-color: #a8a8a8;
        color: #c5c5c5;
    }
`

export default BotaoContainer;