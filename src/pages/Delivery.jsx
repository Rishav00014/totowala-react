import React from 'react'
import {dFeature} from '../data'
import Features from '../component/Features'
import DeliveryTop from '../component/DeliveryTop'
import styled from 'styled-components';

const Layout = styled.div`
  padding: 3vw 10vw ;
  background-color:  #EEEEEE;
`;

const Delivery = () => {
  return (
    <div>
      <DeliveryTop />
      <Layout>
        <Features featuresItem ={dFeature} heading ={"Benefits of working with TotoWala"}/>
      </Layout>
    </div>
  )
}

export default Delivery