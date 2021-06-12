import React from 'react';

function MovieList(props) {
  return (
    <React.Fragment>
      {props.movies.map((movie) => (
        <p>{movie.Title}</p>
      ))}

    </React.Fragment>
  )
}

export default MovieList;