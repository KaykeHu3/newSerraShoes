import styled from 'styled-components';

const BotaoContainer = styled.p`
    text-decoration: none;
    background: #d6341e;
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
        background-color: #751d12;
        color: #c5c5c5;
    }
`

export default BotaoContainer;