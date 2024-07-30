import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getMovies } from '../../redux/movieSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import './HomePage.css';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies({ searchTerm: 'Pokemon', type: 'movie', page }));
  }, [dispatch, page]);

  const handleSearch = (searchTerm: string, type: string, year: string) => {
    setPage(1);  // Reset to first page on new search
    dispatch(getMovies({ searchTerm, type, year, page: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    dispatch(getMovies({ searchTerm: 'Pokemon', type: 'movie', page: newPage }));
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies && <MovieList movies={movies} />}
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
