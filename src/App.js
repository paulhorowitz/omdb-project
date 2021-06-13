import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState('');

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

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <MovieList movies={movies} results={results}/>
      <MovieDetails movies={movies} />
    </div>
  );
}

export default App;
