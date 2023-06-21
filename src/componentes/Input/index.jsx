import styled from 'styled-components'

const Input = styled.input`
    background: transparent;
    border: 2px solid #FFF;
    border-radius: 50px;
    color: #FFF;
    width: 375px;
    height: 40px;
    padding-left: 20px;
    
    &::placeholder {
        color: #FFF;
        font-size: 16px;    
    }

    &:focus {
        outline: none;
    }
`

export default Input;