import styled from 'styled-components'
import Header from './componentes/Header';
import Categorias from './componentes/Categorias';
import Carrossel from './componentes/Carrossel';

const AppContainer = styled.div`

`

function App() {
  return (
    <AppContainer>
      <Header />
      <Categorias />
      <Carrossel />
    </AppContainer>
  )
}

export default App;
