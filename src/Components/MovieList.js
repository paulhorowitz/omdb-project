import React from 'react';
import {Card, ListGroup, Image} from 'react-bootstrap';

function MovieList(props) {
  if (props.movies) {
  return (
    <div className="card-movie-list">
          <h5>{props.movies.length} results</h5>
        {props.movies.map((movie) => (
          <Card>
            <ListGroup variant="flush">
            <img className="movie-list-thumbnail" src={movie.Poster}/>
            <div>{movie.Title}</div>
            <div>{movie.Year}</div>
            </ListGroup>
          </Card>
        ))}
      
    </div>
    )
  }
}

export default MovieList;