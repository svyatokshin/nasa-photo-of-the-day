import React from "react";
import styled from "styled-components";

const NasaCardThing = styled.div`
    color:black;
    width:100%;
    height:100%;

`;

const DateContainer = styled.div`

    border: 10px dotted green;
    margin: 0 40%;
`;

const TitleStyle = styled.h1`
    border-bottom: 5px solid orange;
    margin: 2% 33%;

`;

const NasaCardInfo = props => {
    return (
        <NasaCardThing>
        <div className="nasaCardInfo">
            <DateContainer><h3>Current Date: {props.data.date}</h3></DateContainer>
            <TitleStyle>{props.data.title}</TitleStyle>
            <p>{props.data.explanation}</p>
            <img className="nasaCardImg" src={props.data.url} alt={props.data.title}/>
            <div className="bottom">
                <p>Photographer: {props.data.copyright}</p>
                
            </div>
        </div>
        </NasaCardThing>
    )
}

export default NasaCardInfo;