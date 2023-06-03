import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Footer() {

    return (
        <DivFooter>
            <Link to={"/habitos"} style={{ textDecoration: 'none' }}>
            <p>Hábitos</p>
            </Link>
            <Link to={"/hoje"} style={{ textDecoration: 'none' }}>
            <Ellipse>
                <p>Hoje</p>
            </Ellipse>
            </Link>
            <Link to={"/historico"} style={{ textDecoration: 'none' }}>
            <p>Histórico</p>
            </Link>

        </DivFooter>

    )
}       


const DivFooter = styled.div`
    width: 375px;
    height: 70px;
    left: 0px;
    bottom: 0px;
    position: fixed;
    background: #FFFFFF;
    box-sizing: border-box;
    padding: 0 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;


    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        outline: none;
        text-decoration: none;
        color: #52B6FF;
    }
    

`

const Ellipse = styled.div`
    background-color: #45597e;
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 142px;
    bottom: 10px;
  

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #FFFFFF;
    }

`