import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import {Container, Col, Row} from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState('');
  const [currentMovie, setCurrentMovie] = useState('');

  // Get the movie search request using the omdb API 

  const getMoviesRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=fb9f1d4b`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // Create search list only if data is available 
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setResults(responseJson.totalResults)
    }
  }

  // Run fetch movies function when search data updates

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
  },[currentMovie])

  const addCurrentMovie = (movie) => {
      const newCurrentMovie = movie;
      setCurrentMovie(() => newCurrentMovie);
  }

  return (
    <div>
      <Container fluid className="App">
        <Row>
          <Col>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
          </Col>
        </Row>
        <Row>
          <MovieList movies={movies} results={results} handleMovieClick = {addCurrentMovie}/>
          <MovieDetails movies={movies} currentMovie={currentMovie}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
