import React from 'react';

const MovieDetails = (props) => {

  let movieTitle = "";
  let moviePoster = "";
  console.log(props.movies)
  if (props.currentMovie && props.movies) {
    let currentMovieObject = props.movies.find(x => x.imdbID === props.currentMovie)
    if (currentMovieObject) {
      movieTitle = currentMovieObject.Title;
      moviePoster = currentMovieObject.Poster;
      movieT
    }
    
  }

  return (
    <div>
      <h5>Movie details</h5>
      <h6>{movieTitle}</h6>
    </div>
  )
}

export default MovieDetails;