import React from 'react';

function MovieList(props) {
  if (props.movies) {
  return (
    <React.Fragment>
      {props.movies.map((movie) => (
        <p>{movie.Title}</p>
      ))}
    </React.Fragment>
    )
  }
}

export default MovieList;