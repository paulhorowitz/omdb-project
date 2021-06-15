import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';

import G from '../images/g-rating.png';
import PG from '../images/pg-rating.png';
import PG13 from '../images/pg13-rating.png';
import NC17 from '../images/nc17-rating.png';
import R from '../images/r-rating.png';
import TVPG from '../images/tv-pg-rating.png';
import TVY7 from '../images/tv-y7-rating.png';
import TVG from '../images/tv-g-rating.png';
import TVMA from '../images/tv-ma-rating.png';
import unrated from '../images/unrated.png';

const MovieDetails = (props) => {

  const detailsResults = props.detailsResults;

  function renderRatingsSwitch(rating) {
    console.log(detailsResults)
    if (rating)
    {
      switch(rating) {
        case 'G':
          return G;
        case 'PG':
          return PG;
        case 'PG-13':
          return PG13;
        case 'NC17':
          return NC17;
        case 'R':
          return R;
        case 'TV-G':
          return TVG;
        case 'TV-PG':
          return TVPG;
        case 'TV-Y7':
          return TVY7;
        case 'TV-MA':
          return TVMA;
        default:
          return unrated;
      }
    }
  }

  return (

    <Container fluid>
    
      {detailsResults &&
        <img src={detailsResults.Poster} alt="movie-poster"></img>
      }
      <h5>{props.detailsResults.Title}</h5>
      {detailsResults &&
        <img src={renderRatingsSwitch(detailsResults.Rated)} alt="rating"></img>
      }
      <p>{props.detailsResults.Title}</p>
      <p>{detailsResults.Genre}</p>
      <p>{detailsResults.Runtime}</p>
      <p>{detailsResults.Actors}</p>
      <p>{detailsResults.Plot}</p>
    </div>
  )
}

export default MovieDetails;