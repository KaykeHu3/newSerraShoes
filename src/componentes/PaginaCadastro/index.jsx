import { useState } from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PaginaCadastro () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [comfirmPassword, setComfirmPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();
    const {signup} = useAuth();


    const handleSignup = () => {
        if (!name | !email | !password | !comfirmPassword){
            setError("Preencha todos os campos");
            return;
        } else if (password !== comfirmPassword) {
            setError("As senhas não são iguais");
            return;
        }

        const res = signup(name, email, password);

        if(res){
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    }

    return(
        <div className='container'>
            <div className='container-register'>
                <div className='wrap-register'>
                    <form className='register-form'>
                        <span className='register-form-title'>
                            Bem-Vindo!
                        </span>
                        <span className='register-form-title'>
                            <div className='logo'>
                                <p className='letter1'>S</p><p className='letter2'>C</p>
                            </div>
                        </span>
                        <div className='wrap-input'>
                            <input 
                                className={name !== "" ? 'has-val input' : 'input'}
                                type='name' 
                                value={name}
                                onChange={e => [setName(e.target.value), setError("")]}
                            />
                            <span className='focus-input' data-placeholder='Nome Completo'></span>
                        </div>


                        <div className='wrap-input'>
                            <input 
                                className={email !== "" ? 'has-val input' : 'input'}
                                type='email' 
                                value={email}
                                onChange={e => [setEmail(e.target.value), setError("")]}
                            />
                            <span className='focus-input' data-placeholder='Email'></span>
                        </div>



                        <div className='wrap-input'>
                            <input
                                className={password !== "" ? 'has-val input' : 'input'}
                                type='password' 
                                value={password}
                                onChange={e => [setPassword(e.target.value), setError("")]}
                            />
                            <span className='focus-input' data-placeholder='Senha'></span>
                        </div>




                        <div className='wrap-input'>
                            <input
                                className={comfirmPassword !== "" ? 'has-val input' : 'input'}
                                type='password' 
                                value={comfirmPassword}
                                onChange={e => [setComfirmPassword(e.target.value), setError("")]}
                            />
                            <span className='focus-input' data-placeholder='Confirmar Senha'></span>
                        </div>


                        <label>{error}</label>

                        <div className='container-register-form-btn'>
                            <button className='register-form-btn' onClick={handleSignup}>Cadastrar-se</button>
                        </div>
                        <div className='text-center'>
                            <span className='txt1'>Já possui conta?</span>
                            <a className='txt2' href="login">Entrar.</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaginaCadastro