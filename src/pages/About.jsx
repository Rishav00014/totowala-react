import React from 'react'
import styled from 'styled-components';
import AboutTop from '../component/AboutTop'
import Content from '../component/Content';
import { aboutData , aboutCard } from '../data';

const ColorLayout = styled.div`
  padding: 20px 25vw;
  background-color: #EEEEEE;
`;
const Layout = styled.div`
  padding: 20px 15vw;
  display: flex;
  justify-content: center;
`;
const Card =styled.div`
  width :30vw;
  padding: 2vw;
`;
const About = () => {
  return (
    <div>
      <AboutTop />
      <ColorLayout>
        <Content 
          title={aboutData.title} 
          data ={aboutData.essey} 
          aboutPage={true}
        />
      </ColorLayout>
      <Layout>
        {aboutCard.map((value) => {
          return (
            <Card>
              <Content 
                title={value.title} 
                data ={value.essey} 
                source={value.source}
                aboutPage={true}
                card ={true}
              />
            </Card>
          )})}
      </Layout>
    </div>
  )
}

export default About