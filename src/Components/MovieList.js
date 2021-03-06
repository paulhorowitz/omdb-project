import React from 'react';
import {Card, ListGroup, Container, Col, Row} from 'react-bootstrap';
import defaultImage from '../images/default-image.jpg'

const MovieList = (props) => {

  if (props.movies) {
  return (
    <div className="card-movie-list">
          
          <Card key="results" className="movie-card">
          <Container>
            <ListGroup variant="flush" className="m-2">
            <Row>
              <Col xs={12}><h5 className="movie-list-results-length">{props.results} RESULTS</h5></Col>
              <Col>
                <Col></Col>
                <Col></Col>      
              </Col>
            </Row>
            </ListGroup>
          </Container>
        </Card>
        
        {/* map through list of returned movies and display cards with thumbnail, title and year */}

        {props.movies.map((movie) => (
          <Card key={movie.imdbID} className="movie-card" onClick={() => props.handleMovieClick(movie.imdbID)}>
            <Container>
              <ListGroup variant="flush" className="m-2">
              <Row>
                {movie.Poster !== "N/A" ? 
                  <Col xs={2}><img className="movie-list-thumbnail" src={movie.Poster} alt="movie poster" /></Col> : 
                  <Col xs={2}><img className="movie-list-thumbnail" src={defaultImage} alt="movie poster" /></Col>
                }
                <Col>
                  <Col className="movie-title">{movie.Title}</Col>
                  <Col className="movie-year">{movie.Year}</Col>      
                </Col>
              </Row>
              </ListGroup>
            </Container>
          </Card>
        ))}
      
    </div>
    )
  }
}

export default MovieList;