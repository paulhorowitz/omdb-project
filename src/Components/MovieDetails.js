import React from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';
import {FaRegBookmark} from 'react-icons/fa';

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

  let rottenTomatoesRating = "unknown";
  let metaCriticRating = "unknown";

  function renderAgeRatings(rating) {
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

    <Container>
      <Row>
        <Col xs={4}>
          {detailsResults &&
            <Image src={detailsResults.Poster} alt="movie-poster" className="movie-poster" fluid />
          }
        </Col>
        <Col xs={8}>
          <Row className="justify-content-end">
            <button className="watchlist"><span><FaRegBookmark /></span>Watchlist</button>
          </Row>
          <Row className="movie-details-section justify-content-start">
            <h2>{props.detailsResults.Title}</h2>
          </Row>
          <Row className="movie-details-section justify-content-start">
            {detailsResults &&
            <img className="rating-image" src={renderAgeRatings(detailsResults.Rated)} alt="rating"></img>
            }
            <span>&nbsp;</span><p>{detailsResults.Year} </p><span>&nbsp;</span>
            <p>{detailsResults.Genre} </p><span>&nbsp;&#8226;&nbsp;</span>
            <p>{detailsResults.Runtime} </p>
          </Row>
          <Row className="movie-details-section justify-content-start">
            <p>{detailsResults.Actors}</p>
          </Row>
        </Col>
      </Row>
      <Row className="plot-section">
        <p>{detailsResults.Plot}</p>
      </Row>
      <Row className="ratings-section text-center">
        <Col className="first-rating" xs={4}>
          <p>{detailsResults && detailsResults.Ratings[0] && detailsResults.Ratings[0].Value ? detailsResults.Ratings[0].Value : null}</p>
          <p>{detailsResults && detailsResults.Ratings[0] && detailsResults.Ratings[0].Source ? detailsResults.Ratings[0].Source : null}</p>
        </Col>
        <Col xs={4}>
        <p>{detailsResults && detailsResults.Ratings[1] && detailsResults.Ratings[1].Value ? detailsResults.Ratings[1].Value : null}</p>
        <p>{detailsResults && detailsResults.Ratings[1] && detailsResults.Ratings[1].Source ? detailsResults.Ratings[1].Source : null}</p>
        </Col>
        <Col className="third-rating" xs={4}>
        <p>{detailsResults && detailsResults.Ratings[2] && detailsResults.Ratings[2].Value ? detailsResults.Ratings[2].Value : null}</p>
        <p>{detailsResults && detailsResults.Ratings[2] && detailsResults.Ratings[2].Source ? detailsResults.Ratings[2].Source : null}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails;