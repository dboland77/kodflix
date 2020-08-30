import React from "react";
import {Link} from 'react-router-dom';


function TvShow(props) {
    return (
      <Link to='/details' className="divItem">
            <img src={props.image} alt={`${props.name} logo`}/>
            <div className="overlay">
              <h1>{props.name}</h1>
            </div>
      </Link>
    );
  }

export default TvShow;