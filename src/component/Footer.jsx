import React from 'react'
import styled from 'styled-components'

import logo from  '../img/logo.png'
import appStoreLogo from  '../img/app-store-logo.png'
import playStoreLogo from  '../img/play-store-logo.png'

import { socialMedia,menuItem } from '../data'
import {mobile} from '../responsive';
import { Link } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    background-color: #393939;
    color: #EEEEEE;

`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    ${mobile({flexDirection : "column"})}
`;
const Brand =styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Info = styled.div`
    font-size: ${props => props.size};
    color : ${props => props.s === true && "#BDD400"};
    padding: 10px;
`;
const Image = styled.img`
    height: ${props => props.size};
    margin: 10px;
`;
const Hline =styled.div`
    width: 90vw;
    height: 1px;
    margin: auto;
    background-color: white;
`;
const Vline = styled.div`
    width: 1px;
    background-color: white;
    ${mobile({display : "none"})}
`;
const Mline =styled.div`
    width: 90vw;
    height: 1px;
    margin: auto;
    background-color: white;
    display: none;
    ${mobile({display : "inline-block"})}
    
`;
const Bottom = styled.div`
    display: flex;
    padding: 30px;
    ${mobile({flexDirection : "column-reverse"})}
`;
const Left = styled.div`
    flex :1;
    text-align: left;
    padding-right: 20px;
`;
const Center = styled.div`
    flex :1;
    display: flex;
    flex-wrap: wrap;
`;
const Right = styled.div`
    flex :1;
    text-align: left;
    padding-left: 20px;
`;
const CopyRight =styled.div`
    padding-top :50px;
    &:hover{
        color: lightgray;
    }

`;


const Links =styled.div`
    display: flex;
    flex: 1;
    min-width: 10vw;
    max-width: 10vw;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease ;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: ${(props) => props.color === true && "black"};
        transform: ${(props) => props.ani === true && "Scale(1.2)"};
    }
    ${mobile({minWidth : "30vw",maxWidth :"30vw"})}
    
`;
const Sicon = (props) =>{
    return( 
        <Links ani={true}>
            <Image src={props.src} ani={true} />
        </Links>) ;
}
const Qlinks = (props)=>{
    return(
        <Links color = {true}>
            {props.name}
        </Links>
    );
};
const footer = () => {

    const quickLinks =[
        menuItem[3],       
        menuItem[4],
        menuItem[5],
        menuItem[6],
        menuItem[7]
    ];

    return (
        <Container>
            <Top>
                <Brand>
                    <Image src ={logo} size ={"6vw"}></Image>
                    <Info size ={"1.5rem"} s={true}>Saathi Har Safar Ka</Info>
                </Brand>
                <Brand>
                    <Info size ={"1rem"} >Download TotoWala App</Info>
                    <div>
                        <Image src={appStoreLogo}  size ={"3vw"} alt="TotoWala Download in IOS" />
                        <Image src={playStoreLogo} size ={"3vw"}alt="TotoWala Download in Android" />
                    </div>
                </Brand>
            </Top>
            <Hline />
            <Bottom>
                <Left>
                    Totowala provides an app-based e-rickshaw booking facility to the users. We connect people with public transportation and nearby public places. 
                    <CopyRight>&copy; 2022 Totowala Private Limited</CopyRight>            
                </Left>
                <Vline />
                <Mline />
                <Center>{quickLinks.map((value,index)=> {
                    return (
                    <Link to ={value.source} style={{textDecoration :"none"}}>
                        <Qlinks name = {value.name} key ={index}/>
                    </Link>)})
                }
                </Center>
                <Vline />
                <Mline />
                <Right>
                    <div>Follow Us :</div>
                    <Center>{socialMedia.map( (value)=> { 
                        return (
                            <a href ={value.link} style={{textDecoration :"none"}}>
                                <Sicon src={value.source} key={value.id}  />
                            </a>
                        )} )}
                    </Center>
                </Right>
            </Bottom>
        </Container>
    )
}

export default footer