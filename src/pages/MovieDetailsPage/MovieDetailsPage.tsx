import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getMovieDetails } from '../../redux/movieSlice';
import './MovieDetailsPage.css';

const MovieDetailsPage: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { movieDetails, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (imdbID) {
      dispatch(getMovieDetails(imdbID));
    }
  }, [dispatch, imdbID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movieDetails) return <div>No details available</div>;

  return (
    <div className="movie-details-page">
      <div className="movie-header">
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <div className="movie-info">
          <h1>{movieDetails.Title} ({movieDetails.Year})</h1>
          <div className="genre-rating">
            <span className="genre">{movieDetails.Genre}</span>
            <span className="rating">IMDB {movieDetails.imdbRating}</span>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Plot</h2>
        <p>{movieDetails.Plot}</p>
      </div>
      <div className="section">
        <h2>Cast</h2>
        <p>{movieDetails.Actors}</p>
      </div>
      <div className="section">
        <h2>More Info</h2>
        <p>Director: {movieDetails.Director}</p>
        <p>Runtime: {movieDetails.Runtime}</p>
        <p>Language: {movieDetails.Language}</p>
        <p>Awards: {movieDetails.Awards}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
