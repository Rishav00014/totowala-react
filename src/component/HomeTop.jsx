import styled from "styled-components";
import React from 'react'


import pic from '../img/header-img -2.webp';
import HalfCircle from "./HalfCircle";
import appStoreLogo from  '../img/app-store-logo.png'
import playStoreLogo from  '../img/play-store-logo.png'

const Layout = styled.div`
  position: relative;
  overflow: hidden;
  height: 45vw;
`;
const Image = styled.img`
  position: relative;
  left: 42vw;
  top: -18vw;
  width : 70vw;
 
`;
const Heading =styled.div`
    position: absolute;
    font-size: 4vw;
    height: 32vw;
    width :45vw;
    margin-top: 3vw;
    margin-left: 10vw;
    font-weight: 400;
    font-family: 'Times New Roman', Times, serif;
    color: #1C1C1C;
`;
const Small = styled.div`
    font-size: 2vw;
    color: #1C1C1C;
    font-family: 'Times New Roman', Times, serif;
    padding: 20px 30px;
`;
const Logo = styled.img`
    height: 5vw;
    margin: 10px;
    transition: all 0.5s ease ;
    cursor: pointer;
    &:hover{
        transform:  Scale(1.2);
    }

`;

const HomeTop = () => {

    const data ="On a journey to improve the E-Rickshaw mobility facility at affordable prices"

    return (
        <Layout>
            <Heading>
                {data}
                <Small>Get the app now</Small>
                <div style={{paddingLeft :"6vw"}}>
                    <Logo src={appStoreLogo} />
                    <Logo src={playStoreLogo} />
                </div>
            </Heading>
            <HalfCircle height ={"32vw"} />
            <Image src={pic} />
        </Layout>
    )
}

export default HomeTop