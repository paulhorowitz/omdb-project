import React, {useState, useEffect} from 'react';

const Type = (props) => {

  function onValueChange(event) {
    props.setRadioValue(event.target.value);
  }

  const {radioValue, getTypeFilteredMoviesRequest} = props;

  // Run fetch type movies function when search data updates

  useEffect(() => {
    getTypeFilteredMoviesRequest(radioValue);
  }, [radioValue]);

  return (
    <div className="radio-labels" onChange={onValueChange}>
      <input className="radio-button" type="radio" value="" name="type" defaultChecked="true"/> Any
      <input className="radio-button" type="radio" value="movie" name="type" /> Movies
      <input className="radio-button" type="radio" value="series" name="type" /> Series
      <input className="radio-button" type="radio" value="episode" name="type" /> Episodes
    </div>
  )
}

export default Type