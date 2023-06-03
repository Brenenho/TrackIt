import styled from "styled-components"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";
import { useContext } from 'react';
import { useEffect } from "react";
import Context from '../Context';
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function History() {

    const { foto, setFoto } = useContext(Context)


    return (
        <>
            <Container>
                <NavBar foto={foto} />
                <ContentMain>
                    <Titulo>
                        Histórico
                    </Titulo>
                    <SubTitulo>
                        Em breve você poderá ver o histórico dos seus hábitos aqui!
                    </SubTitulo>
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
    margin-bottom: 17px;
`

const SubTitulo = styled.p`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-bottom: 28px;
    color: #666666;

`