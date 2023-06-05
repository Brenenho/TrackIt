import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import logo from "../assets/trackit.png"
import { ThreeDots } from 'react-loader-spinner'

export default function SignUp () {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [load, setLoad] = useState(false);

    const navigate = useNavigate();

  function signUp(e){
    e.preventDefault();

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

    const novo = { email: email, name: nome, image: foto, password: password }

    const promise = axios.post(URL, novo);

    setLoad(true)
    

    promise.then( resposta => {
      setLoad(false)
      alert('Você foi cadastrado com sucesso!');
      navigate('/');
    });

    promise.catch( erro => {
      
      setLoad(false)
      alert(erro.response.data.message)});

  }

    return (

    <Container load={load}>
        <img src={logo} alt="" />
        <form onSubmit={signUp}>
        
        <input
        data-test="email-input"
        disabled={load}
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
        />
        <input
        data-test="password-input"
        disabled={load}
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
        />
        <input
        data-test="user-name-input"
        disabled={load}
          type="text"
          placeholder="Nome"
          required
          value={nome}
          onChange={ (e) => setNome(e.target.value)}
        />
        <input
        data-test="user-image-input"
        disabled={load}
          type="text"
          placeholder="Foto"
          required
          value={foto}
          onChange={ (e) => setFoto(e.target.value)}
        />
        
        <button data-test="signup-btn"  disabled={load} type="submit">
        {load == true ? (
            <ThreeDots
              width= "51"
              height= "13"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : ("Cadastrar")}
        </button>
      </form>
      <StyledLink data-test="login-link" to="/">Já possui uma conta? Faça Login</StyledLink>




    </Container>


    )

    
}

const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    img {
        width: 180px;
        height: 178.38px;
        margin-bottom: 32px;
        margin-top: 68px;
    }

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 0 10px;
        outline-color: #52B6FF;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom:6px;
        &::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
			
    }}

    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        opacity: ${props => (props.load ? `0.7` : `1`)};
        text-align: center;
        border: none;
        color: #FFFFFF;
        

    }
    
`

const StyledLink = styled(Link)`
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
    color: #52B6FF;
`