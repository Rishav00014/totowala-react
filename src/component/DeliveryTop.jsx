import styled from "styled-components";
import React from 'react'


import pic from '../img/header-image-3.png';
import HalfCircle from "./HalfCircle";


const Layout = styled.div`
  position: relative;
  overflow: hidden;
  height: 55vw;
  background-color:  #EEEEEE;
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-bottom: 30px;
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


const DeliveryTop = () => {
    const data =
    {
        title : "TotoWala Delivery",
        content :"TotoWala delivery leverages the largest fleet of vehicles combined with trained delivery professionals and a tech first approach making us the India's most reliable, affordable, & largest electric last mile delivery partner"
    };
    
    return (
        <Layout>
            <Heading>{data.title}<Small>{data.content}</Small></Heading>
            <HalfCircle  height ={"26vw"} />
            <Image><img src={pic} alt="pic of seen" /></Image>
        </Layout>
    )
}

export default DeliveryTop