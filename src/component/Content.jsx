import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
    width: 100%;
`;
const Imaage = styled.img`
    width: 14vw;
    padding: 0px 8vw  ;
`;
const Title = styled.div`
    padding-bottom: 1.5rem;
    font-size: ${props => props.about === true ?"3rem": "2rem"};
    font-family : ${props => props.about === true && "'Times New Roman', Times, serif"}; 
    text-align : ${props => props.about === true && "center"}; 
`;
const Bold =styled.span`
    font-weight: ${props => props.about === true && "700"} ;
    font-family : ${props => props.about === true && "'Times New Roman', Times, serif"}; 
`;

const Data =styled.div`
    font-size: 1.2rem;
    padding-bottom: 1rem;
    color:rgb(65, 65, 65);
    text-align : ${props => props.about === true && "justify"}; 
`;
const Slogun =styled.div`
    display: ${props => props.card === true && "none"} ; 
    padding: 3rem;
    font-size: 1.2rem;
    text-align: center;
`;

const Content = (props) => {
    return (
        <Container>
            <Imaage src={props.source}></Imaage>
            <Title about={props.aboutPage} >
                {props.title[0]}
                <Bold about={props.aboutPage}>
                    {props.title[1]}
                </Bold>
            </Title>
            {props.data.map((value) => {
                return <Data about ={props.aboutPage}>{value}</Data>
            })}
            <Slogun card ={props.card}>Totowala <br />“Saathi Har Safar Ka”</Slogun>
        </Container>
    )
}

export default Content