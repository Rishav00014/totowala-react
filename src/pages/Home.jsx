import React from 'react'
import styled from 'styled-components'
import Content from '../component/Content';
import HomeTop from '../component/HomeTop';
import Services from '../component/Services'
import Slider from '../component/Slider'
import {homeData} from '../data';


const Layout = styled.div`
  padding: 3vw 10vw ;
`;
const LayoutColor =styled.div`
  padding: 3vw 10vw ;
  background-color:  #EEEEEE;
`;
const Color =styled.div`
  background-color:  #EEEEEE;
`;


const Home = () => {


  return (
    <div>

      <Color><HomeTop /></Color>
      <Layout> 
        <Content title={homeData.title} data={homeData.essey} />
      </Layout>
      <LayoutColor>
          <Services />
      </LayoutColor>
      <Layout>
        <Slider />
      </Layout>
    </div>
  )
}

export default Home;