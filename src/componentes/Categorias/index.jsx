import styled from 'styled-components'

const ListaCat = styled.ul`
    display: flex;
    justify-content: center;
    margin: 30px 0;
`

const Cat = styled.li`
    margin: 0 20px;
    border: 2.5px solid #000;
    border-radius: 15px;
    padding: 15px 10px 0;
    font-weight: bold;
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: #cacaca;
    transition-duration: 500ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
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