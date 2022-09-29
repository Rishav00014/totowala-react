import React from "react";
import styled from 'styled-components';
import Feature from "./Feature";


const Title = styled.div`
    padding-left:30px;
    font-size: 2rem;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const Features = (props) => {
    const featuresItem =props.featuresItem;
    return (
    <div>
        <Title>{props.heading}</Title>
        <Container>
            {featuresItem.map((value) => <Feature
                key ={value.id} 
                img ={value.source}
                title ={value.title} 
                details ={value.details} 
            />)}
        </Container>
    </div>
    );
};


export default Features;