import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import {Container, Col, Row} from 'react-bootstrap';
import Favourites from './Components/Favourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState('');
  const [detailsResults, setDetailsResults] = useState('');
  const [radioValue, setRadioValue] = useState(['Any']);
  const [watchlist, setWatchlist] = useState([]);

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

  // Get full movie details using the omdb api

  const getMovieDetailsRequest = async (movie) => {
    const detailsURL = `https://www.omdbapi.com/?i=${movie}&apikey=fb9f1d4b`

    const detailsResponse = await fetch(detailsURL);
    const detailsResponseJson = await detailsResponse.json();

    // Create movie details only if data is available

    if (detailsResponseJson) {
      setDetailsResults(detailsResponseJson);
    }
  }

  // Get the filtered type movie search request using the omdb API 

  const getTypeFilteredMoviesRequest = async (radioValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=fb9f1d4b&type=${radioValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // Create search list only if data is available 
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setResults(responseJson.totalResults)
    }
  }

  // Get localstorage data when app loads for the first time

  useEffect(() => {
    if (localStorage.getItem('react-movie-app-watchlist') !== null) {

    const movieWatchlist = JSON.parse(localStorage.getItem('react-movie-app-watchlist')
    );

    setWatchlist(movieWatchlist);
  }
  }, [])

  // Run fetch movies function when search data updates

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-watchlist', JSON.stringify(items))
  }

  // Add a movie to the watchlist and save to local storage

  const addToWatchlist = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  }


  // remove a movie from the watchlist and save to local storage

  const removeFromWatchList = (movie) => {
    const newWatchlist = watchlist.filter((watch) => watch.imdbID !== movie.imdbID);
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  }

  return (
    <div>
      <Container fluid className="App">
        <Row>
          <Col sm={true}>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} radioValue={radioValue} setRadioValue={setRadioValue} getTypeFilteredMoviesRequest={getTypeFilteredMoviesRequest}/>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <MovieList movies={movies} results={results} handleMovieClick = {getMovieDetailsRequest}/>
          </Col>
          <Col xs={6}>
            <MovieDetails movies={movies} detailsResults={detailsResults} handleWatchlistClick={addToWatchlist} />
          </Col>
          <Col xs={2} className="watchlist-section">
            <Favourites style={{border: "1px solid #666666"}} watchlist={watchlist} handleRemoveWatchlistClick={removeFromWatchList}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;