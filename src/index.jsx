import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Cadastro from './pages/Cadastro';
// import PaginaRestrita from './pages/PaginaRestrita';
// import ErrorPage from './pages/ErrorPage';
import {createGlobalStyle} from 'styled-components'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auths';

// const rotas = createBrowserRouter([
//   {
//     path: "",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children:[
//       {
//         path:"/",
//         element: <Home />
//       },
//       {
//         path:"login",
//         element: <Login />
//       },
//       {
//         path:"cadastro",
//         element: <Cadastro />
//       },
//       {
//         path:"adm",
//         element: <PaginaRestrita />
//       }
//     ]
//   }
// ])


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: #e1e1e1;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
      {/* <RouterProvider router={rotas}/> */}
    </AuthProvider>
  </React.StrictMode>
);
