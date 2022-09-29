import React from "react";
import styled from 'styled-components';

const Image = styled.div`
    padding: 10px;
`;
const Info =styled.div`
    padding: 10px;
`;
const Title =styled.div`
    font-weight: 600;
    font-size: 1.1rem;
    color: black;
`;
const Content =styled.div`
    text-align: left;
    color: #393939;

`;
const Fcard =styled.div`
    flex: 1;
    min-width: 20vw;
    display: flex;
    justify-content: flex-start;
    margin: 20px;

`;


const Feature = (props)=>{
    return (
        <Fcard>
            <Image><img src ={props.img} /></Image>
            <Info>
               <Title>{props.title}</Title>
               <Content>{props.details}</Content> 
            </Info>
        </Fcard>
    );
};

export default Feature;