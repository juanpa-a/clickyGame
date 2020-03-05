import React from "react";
import "../style.css";

function Card(props) {

    return(
        <div className="card">
            <img className="card-img" 
                src={props.image}
                alt={props.name}
                onClick={props.handleCharacterClick}/>
        </div>
    );
}

export default Card;