import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <p>IMDb ID: {movie.imdbID}</p>
      <Link to={`/movie/${movie.imdbID}`} className="details-link">View Details</Link>
    </div>
  );
};

export default MovieCard;
