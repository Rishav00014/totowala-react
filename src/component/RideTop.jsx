import styled from "styled-components";
import React from 'react'


import pic from '../img/ride-img.png';
import HalfCircle from "./HalfCircle";


const Layout = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vw;
  background-color:  #EEEEEE;
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Heading =styled.div`
    position: absolute;
    font-size: 4vw;
    width :48vw;
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
    padding: 20px 0px;
`;


const RideTop = () => {
    const data ="TotoWala Ride";
    const content ="TotoWala provides an app-based e-rickshaw booking facility to its users, helping them connect to drivers to move from one place to another place."
    return (
        <Layout>
            <Heading>{data}<Small>{content}</Small></Heading>
            <HalfCircle  height ={"22vw"} />
            <Image><img src={pic} alt="pic of seen" /></Image>
        </Layout>
    )
}

export default RideTop