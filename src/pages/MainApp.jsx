import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


export default function MainApp() {


    

    return (
        <NavBar>
            <p>TrackIt</p>
            <img src="https://media.discordapp.net/attachments/1096180025130242130/1113285231722639451/image.png" alt="" />
        </NavBar>




    )
}

const NavBar = styled.div`
    position: fixed;
    width: 375px;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;

    p {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        /* identical to box height */


        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
    }




`