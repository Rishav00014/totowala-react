import React from 'react'
import {featuresItem} from '../data'
import Features from '../component/Features'
import RideTop from '../component/RideTop'
import styled from 'styled-components';

const Layout = styled.div`
  padding: 3vw 10vw ;
`;

const Ride = () => {
  return (
    <div>
      <RideTop />
      <Layout>
      <Features featuresItem ={featuresItem} heading ={"Why ride with us"}/>
      </Layout>
    </div>
  )
}

export default Ride