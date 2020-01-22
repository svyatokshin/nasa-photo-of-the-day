import React from "react";

const NasaCardInfo = props => {
    return (
        <div className="nasaCardInfo">
            <h2>Title: {props.data.title}</h2>
            <p>Description: {props.data.explanation}</p>
            <img className="nasaCardImg" src={props.data.url} alt={props.data.title}/>
            <div className="bottom">
                <p>Photographer: {props.data.copyright}</p>
                <p>Current Date: {props.data.date}</p>
            </div>
        </div>
    )
}

export default NasaCardInfo;