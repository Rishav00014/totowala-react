import styled from 'styled-components'
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import{sliderItem} from '../data'

const Title = styled.div`
    font-size: 2rem;
`;
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 30vw;
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const Arrow = styled.div`
    background-color: lightgray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width :  5vw;
    height : 5vw;
    cursor: pointer;
    position: absolute;
    opacity: 0.5;
    &:hover{opacity: 1;}
    //to center button vertically 
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 2;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex*-80}vw);
`;
const Image = styled.img`
    height: 100%;
`;
const Slide = styled.div`
    width: 80vw;
    height: 30vw;
    display: flex;
    align-items: center;
    background-color: black;
`;
const ImgContainer = styled.div`
    flex : 2;
    height: 30vw;
`;
const InfoContainer = styled.div`
    flex : 1;
    color: white;
    padding: 3vw;
`;

const Riview = styled.div`
    font-size: 2.5vw;
    text-align: center;
`;
const Name = styled.div`
    font-size: 1.8vw;
    text-align: center;
    padding-top: 3vw ;
    
`;
const Frame = (props) => {
    return (
        <Slide>
            <ImgContainer><Image src={props.src} /></ImgContainer>
            <InfoContainer>
                <Riview>{props.review}</Riview>
                <Name>{props.name}</Name>
            </InfoContainer>
        </Slide>
    );
}

const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0);

    const handleClick = (direction)=>{
        if(direction === "right"){
            setSlideIndex(slideIndex===sliderItem.length-1?0:slideIndex+1)
        }
        else{
            setSlideIndex(slideIndex===0?sliderItem.length-1:slideIndex-1)
        }
    }

    return (
        <div>
            <Title>People Said</Title>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeft fontSize='large'></ArrowLeft>
                </Arrow>
                <Wrapper slideIndex ={slideIndex}>
                    {sliderItem.map((value,index)=> <Frame
                        key = {index} 
                        name = {value.name}
                        src ={value.source}
                        review ={value.review}
                     />)}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRight fontSize='large'></ArrowRight>
                </Arrow>
            </Container>
        </div>
    )
}

export default Slider;
