import styled from 'styled-components'

const Input = styled.input`
    background: transparent;
    border: 2px solid #5c5c5c;
    border-radius: 50px;
    color: #000;
    width: 375px;
    height: 40px;
    padding-left: 20px;
    
    &::placeholder {
        color: #5c5c5c;
        font-size: 16px;    
    }

    &:focus {
        outline: none;
    }
`

export default Input;