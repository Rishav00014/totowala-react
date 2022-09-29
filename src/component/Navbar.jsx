import React  from 'react'
import styled from 'styled-components'
import mainLogo from '../img/logo.png'
import menu from '../img/menu.png'
import close from '../img/close.png'
import { NavLink } from "react-router-dom";
import { menuItem } from '../data';
import {mobile} from '../responsive'
import { useState } from 'react'


const Container = styled.div`
  background-color :#CCE500;
  display: flex;
  flex-direction: row;
  height :60px;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 3;
  ${mobile({justifyContent : "space-between" })}
`;

const Mylinks = styled.div`
  display:  flex;
  flex-direction: row;
  ${mobile({display : "none"})};
`;

const Link = styled.div`
  align-items: center;
  color: #1C1C1C;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  padding: 1vw 1vw;

  //position center verticaly
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  cursor: pointer;
  &:hover{
    background-color : #BDD400;
    color: #3E5C50
  }
`;

const Image = styled.img`
  margin : "2px";
  display: ${(props) => props.show};
  ${mobile({display: "block"})};
`;

const LogoName = styled.span`
  font-size: 40px;
  font-weight: 800;
  display: ${(props) => props.show};
  ${mobile({display: "block"})};
`;

const Navbar = () => {

  
  const navItem =[
    menuItem[0],
    menuItem[1],
    menuItem[2],
    menuItem[3],
    menuItem[4],
    menuItem[5],
    menuItem[6]
  ];

  const [mobile,setMobile] = useState([]);

  return (
    <Container>
      <img src={mainLogo} style = {{margin : "2px"}}  alt={"logo of toto wala"}/>
      <LogoName show ={"none"}>TOTOWALA</LogoName>      
      <Mylinks>
        {navItem.map((value) => {
          return  <NavLink to={value.source} style={{textDecoration : "none"}}><Link>{value.name}</Link></NavLink>}
        )}
      </Mylinks>
      <Image src={menu} show ={"none"} alt={"logo of menu"} />
      <Image src={close} style={{display : "none"}} alt={"logo of close"} />
    </Container>
  )
}

export default Navbar