import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieDetails } from '../api/omdbApi';

interface MovieState {
  movies: any[];
  movieDetails: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  movieDetails: null,
  loading: false,
  error: null,
};

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (params: { searchTerm: string; type?: string; year?: string; page?: number }) => {
    const response = await fetchMovies(params);
    return response.Search;
  }
);

export const getMovieDetails = createAsyncThunk(
  'movies/getMovieDetails',
  async (imdbID: string) => {
    const response = await fetchMovieDetails(imdbID);
    return response;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies';
      })
      .addCase(getMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movie details';
      });
  },
});

export default movieSlice.reducer;
