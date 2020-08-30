import React from "react";
import {Link} from 'react-router-dom';


function TvShow(props) {
    return (
      <Link to={`/${props.id}`} className="divItem">
            <img src={props.image} alt={`${props.name} logo`}/>
            <div className="overlay">
              <h2>{props.name}</h2>
            </div>
      </Link>
    );
  }

export default TvShow;