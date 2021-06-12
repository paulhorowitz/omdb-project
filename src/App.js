import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);


  // Get the movie search request using the omdb API 

  const getMoviesRequest = async () => {
    const url = "https://www.omdbapi.com/?s=avatar&apikey=fb9f1d4b";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson.Search)
    setMovies(responseJson.Search)
  }

  useEffect(() => {
    getMoviesRequest();
  }, []);

  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
      <MovieDetails movies={movies} />
    </div>
  );
}

export default App;
