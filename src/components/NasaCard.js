import React, {useState, useEffect} from "react";
import NasaCardInfo from "./NasaCardInfo";
import axios from "axios";

const NasaCard = props => {
    const [nasaCard, setNasaCard] = useState([]);
    // const [nasaCardTitle, setNasaCardTitle] = useState();
    // const [nasaCardUrl, setNasaCardUrl] = useState();
    console.log("This is the nasaCardUrl: ", nasaCard.hdurl);
    console.log("This is the nasaCardTitle: ", nasaCard.title);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=ywUpqj4ManmW6DKColcPqPSjymmffDDxTh4LJ0Sw")
            .then(res => {
                console.log("this is the response", res);
                setNasaCard(res.data);
                // setNasaCardTitle(res.data.title);
            })
            .catch(err =>{
                console.log("This is the error you are recieving: ", err)
            });
        }, []);
        
    return(
        <div className="nasaCard">
             <NasaCardInfo
             key={nasaCard.title}
             data={nasaCard}
             /> 
                    
           
        </div>
    )

}



export default NasaCard;