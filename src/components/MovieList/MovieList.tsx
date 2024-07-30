import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

interface MovieListProps {
  movies: any[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
