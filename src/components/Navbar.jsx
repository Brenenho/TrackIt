import React from "react";
import styled from "styled-components";

export default function NavBar(props) {

    return (

        <DivNavbar>
            <p>TrackIt</p>
            <img src= {props.foto} alt="" />
        </DivNavbar>
    )
}

const DivNavbar = styled.div`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    box-sizing: border-box;

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
        border-radius: 50%;
    }
`