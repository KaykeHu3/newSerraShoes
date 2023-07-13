import styled from 'styled-components'

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e1e1e1;
    width: 500px;
    align-items: center;
`

const Input = styled.input`
    width: 75%;
    padding: 10px 0 10px 10px;
    margin-top: 15px;
`

const Cadastrese = styled.p`
    color: #0087c5;
    padding-bottom: 15px;
`

export {
    InputContainer,
    Input,
    Cadastrese
}