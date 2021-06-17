import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

const Genre = (props) => {

  function onValueChange(event) {
    props.setRadioValue(event.target.value);
  }

  const {radioValue, getGenreFilteredMoviesRequest} = props;
  

  // Run fetch genre movies function when search data updates

  useEffect(() => {
    getGenreFilteredMoviesRequest(radioValue);
  }, [radioValue]);

  return (
    <div className="radio-labels" onChange={onValueChange}>
      <input className="radio-button" type="radio" value="any" name="genre" /> Any
      <input className="radio-button" type="radio" value="movie" name="genre" /> Movies
      <input className="radio-button" type="radio" value="series" name="genre" /> Series
      <input className="radio-button" type="radio" value="episode" name="genre" /> Episodes
    </div>
  )
}

export default Genre