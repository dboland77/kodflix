import React from "react";


function TvShow(props) {
    return (
      <div className="divItem">
            <img src={props.image} alt={`${props.name} logo`}/>
            <div className="overlay">
              <h1>{props.name}</h1>
            </div>
      </div>
    );
  }

export default TvShow;