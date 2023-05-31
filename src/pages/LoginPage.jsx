import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import logo from "../assets/trackit.png"

export default function LoginPage () {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

  function LogIn(e){
    e.preventDefault();

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const novo = { email: email, password: password }

    const promise = axios.post(URL, novo);

    promise.then( resposta => {
      navigate('/');
    });

    promise.catch( erro => alert(erro.response.data.message));

  }


    return (

    <Container>
        <img src={logo} alt="" />
        <form>
        
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
        />
        
        <button type="submit">Entrar</button>
      </form>
      <StyledLink to="/cadastro">Não possui uma conta? Cadastre-se</StyledLink>




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
        
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
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