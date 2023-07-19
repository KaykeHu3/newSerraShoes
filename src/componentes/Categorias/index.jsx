import styled from 'styled-components'

const ListaCat = styled.ul`
    display: flex;
    justify-content: center;
    margin: 30px 0;
`

const Cat = styled.li`
    margin: 0 20px;
    border-radius: 15px;
    padding: 15px 15px;
    font-weight: bold;
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: #5c5c5c;
    color: #FFF;
    transition-duration: 500ms;

    &:hover {
        background-color: #8a8a8a;
    }
`

const ListaDeCategoria = ['Lançamento', 'Promoções', 'Mais Vendidos']

export default function Categorias () {
    return(
        <ListaCat>
            {ListaDeCategoria.map((categoria) => (
                <Cat>
                    <p>{categoria}</p>
                </Cat>
            ))}
        </ListaCat>
    )
}