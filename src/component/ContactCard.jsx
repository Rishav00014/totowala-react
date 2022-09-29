import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
    width: 33.33vw;
    height: 33.33vw;
    position: relative;
    display: flex;
    
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
`;

const Info =styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
`;

const Data =styled.div`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 800;
    font-size: 2vw;
    margin: 20px;
`;

const Logo =styled.img`
    height: 10vw;
    cursor: pointer;
    transition: all 0.7s ease ;
    &:hover{
        transform: Scale(1.2);
    }
`;



const ContactCard = (props) => {
  return (
    <Container>
        <Info>
            <Data>{props.text}</Data>
            <a href={props.link}><Logo src={props.logo} alt={props.alt} /></a>
        </Info>
        <CardImage src={props.source} alt={props.alt} />
    </Container>
  )
}

export default ContactCard