import styled from 'styled-components'

const Input = styled.input`
    background: transparent;
    border: 2px solid #e1e1e1;
    border-radius: 50px;
    color: #000;
    width: 375px;
    height: 40px;
    padding-left: 20px;
    
    &::placeholder {
        color: #e1e1e1;
        font-size: 16px;    
    }

    &:focus {
        outline: none;
    }
`

export default Input;