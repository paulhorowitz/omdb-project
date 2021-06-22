import React from 'react';
import {FaTrash} from 'react-icons/fa';

const Favourites = (props) => {

  return(
    <div>
      <h3 className="watchlist-title">Watchlist</h3>
      <ul>
      {props.watchlist && props.watchlist.map((movie) => (
        <li key={movie.imdbID}>{movie.Title} <FaTrash onClick={() => props.handleRemoveWatchlistClick(movie)}/></li>
      ))
      }
      </ul>
    </div>
  )
}

export default Favourites;