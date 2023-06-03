import styled from "styled-components"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";
import { useContext } from 'react';
import { useEffect } from "react";
import Context from '../Context';
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


export default function MainApp() {

    const {foto, setFoto} = useContext(Context)

    

    return (

        <>
            <Container>
                <NavBar foto= {foto} />

                <ContentMain>
                    <Titulo>
                        Segunda, 17/05
                    </Titulo>
                    <SubTitulo>
                        Nenhum hábito concluído ainda
                    </SubTitulo>
                    <Card>
                        <div>
                            <TituloCard>Ler 1 capitulo de livro</TituloCard>
                            <Sequencia>Sequência atual: 3 dias</Sequencia>
                            <Recorde>Seu recorde: 5 dias</Recorde>
                        </div>
                        <Check>
                            <img src="https://media.discordapp.net/attachments/931340188024713226/1113687254762799104/image.png" alt="" />
                        </Check>
                    </Card>
                    <Card>
                        <div>
                            <TituloCard>Ler 1 capitulo de livro</TituloCard>
                            <Sequencia>Sequência atual: 3 dias</Sequencia>
                            <Recorde>Seu recorde: 5 dias</Recorde>
                        </div>
                        <Check>
                            <img src="https://media.discordapp.net/attachments/931340188024713226/1113687254762799104/image.png" alt="" />
                        </Check>
                    </Card>
                    <Card>
                        <div>
                            <TituloCard>Ler 1 capitulo de livro</TituloCard>
                            <Sequencia>Sequência atual: 3 dias</Sequencia>
                            <Recorde>Seu recorde: 5 dias</Recorde>
                        </div>
                        <Check>
                            <img src="https://media.discordapp.net/attachments/931340188024713226/1113687254762799104/image.png" alt="" />
                        </Check>
                    </Card>
                    
                </ContentMain>

                <Footer />
                    
            </Container>
        </>
    )
}





const Container = styled.div`
    background-color: #F2F2F2;
    height: calc(100vh - 70px);
    width: 100%;
    overflow-y: auto;
`


const ContentMain = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 28px;
    padding-bottom: 70px;
    padding-top: 70px;
    padding-left: 18px;
    padding-right: 18px;
    box-sizing: border-box;
    
    
`

const Titulo = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    width: 172px;
    height: 29px;
    color: #126BA5;
`

const SubTitulo = styled.p`
    width: 278px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-bottom: 28px;
    color: #BABABA;

`
const Card = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
`

const TituloCard = styled.p`

font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        width: auto;
        height: 25px;
        color: #666666;        

`
const Sequencia = styled.p`

font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        margin-top: 7px;
        color: #666666;

`
const Recorde = styled.p`

font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;

`

const Check = styled.div`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
        justify-content: center;
        align-items: center;


    img {       
            width: 35px;
            height: 28px;
        }
`
