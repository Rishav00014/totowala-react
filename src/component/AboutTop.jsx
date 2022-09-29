import React from 'react';
import styled from 'styled-components';
import design from '../img/about-1.png';
import imageDriver from '../img/home-3.png';


const Rectangle =styled.div`
    position: relative;
    height: 25vw;
`;
const RectangleHalf =styled.img`
    position: relative;
    width: 85vw;
    height: 25vw;
`;
const Driver = styled.img`
    position: absolute;
    right: 0vw;
    height: 25vw;
    width: 50vw;
`;

function AboutTop() {
  return (
    <Rectangle>
        <Driver src={ imageDriver} alt="design for about hedder" />
        <RectangleHalf src={design} alt="design for about hedder"  />
    </Rectangle>
    
  )
}

export default AboutTop