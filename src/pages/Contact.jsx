import React from 'react'
import styled from 'styled-components'
import ContactCard from '../component/ContactCard';
import {contactList} from '../data'

const Layout =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 100px;
`;
const Container =styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  color: #1C1C1C;
  background-color:  #EEEEEE;
`;
const Title =styled.div`
  font-size: 4vw;
  font-family: 'Times New Roman', Times, serif;

`;
const TitleS =styled.div`
  font-size: 2rem;
`;

const Contact = () => {
  return (
    <Layout>
    <Title>GET IN TOUCH</Title>
    <TitleS>We'd love to hear from you</TitleS>
    <Container>
      {contactList.map( value => {
        return (<ContactCard  
          id={value.id}
          text= {value.text}
          alt ={value.alt}
          source={value.source}
          logo={value.logo}
          link={value.link}
        />)
      })}
    </Container>
    </Layout>
  )
}

export default Contact