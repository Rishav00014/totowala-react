import React from 'react';
import styled from 'styled-components';

import construction from "../img/construction.png";
const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:  2vw 10vw;
`;
const Construction = styled.img`
    width: 100%;
`;

const UnderCons = () => {
  return (
    <Layout>
        <Construction src={construction} alt={"construction image"} />
    </Layout>
  )
}

export default UnderCons