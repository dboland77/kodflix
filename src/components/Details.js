import React from "react";
import { Link, Redirect } from "react-router-dom";
import getGallery from "./Gallery-get";
import './Details.css';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getGallery()
        .find( (movie) =>  movie.id === movieId);
      this.setState({movie});
    };
  
  render() {
    if(this.state.movie === undefined) {
      return <Redirect to="not-found"/>
    }
    else {
      return (
        <div className='Details'>
        <h1>{this.state.movie.name}</h1>
        <div className = 'content'>
          <div className = "text">
            <div>{this.state.movie.synopsis}</div>
          </div>
          <img 
            className = "image" 
            src={this.state.movie.image}
            alt = {this.state.movie.name}/>
        </div>
          <Link to="/"> Back to home page </Link>
      </div>
          );
      }
  }
}
