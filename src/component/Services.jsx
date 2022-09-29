import React from "react";
import styled from 'styled-components'
import {serviceItem} from '../data'

const Title = styled.div`
    font-size: 2rem;
`;

const Container =styled.div`
    display: flex;
    display : flex;
    justify-content : space-between;
`;

const Scard = styled.div`
    text-align: justify;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    width: 35vw;
    color: rgb(65, 65, 65);
    font-weight: 300;
    position: relative;
`;

const Image =styled.img`
    width : 100% ;
    height: 100%;
    opacity: .7;

`;
const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top :0;
    left: 0;
`;

const Stitle = styled.div`
    color: #FFFFFE;
    font-size: 3vw;
    font-weight: 400;
`;

const Link =styled.div`
    color: #FFFFFE;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 300;

    cursor: pointer;
    &:hover{
        color: bisque;
    }
`;


const Service = (props) => {
    return (
        <Scard>
            <Image src= {props.img}/>
            <Info>
                <Stitle>{props.title}</Stitle>
                <Link>Read more</Link>
            </Info>
        </Scard>
    );
}


const Services = () =>{
    return (
        <div>
            <Title>Our Services</Title>
            <Container>
                {serviceItem.map((value) => <Service 
                    img ={value.source}
                    title ={value.title} 
                    key ={value.id} 
                />)}
            </Container>
        </div>
    );
}

export default Services;