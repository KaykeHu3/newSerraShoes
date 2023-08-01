import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import Login from "../pages/Login"
import PaginaRestrita from "../pages/PaginaRestrita"
import ProdutoCadastro from "../pages/ProdutoCadastro";
import App from "../App";
//import useAuth from "../hooks/useAuth";


// const Private = ({Item}) => {
//     //const admSigned = useAuth();

//     //return admSigned > 0 ? <Item /> : <AdmSignin />
// }

const RoutesApp = () => {
    return(
        <BrowserRouter>
                <App />
            <>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="cadastro" element={<Cadastro />}/>
                    <Route path="adm" element={<PaginaRestrita />}/>
                    <Route path="produtoscadastro" element={<ProdutoCadastro />} />
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default RoutesApp;