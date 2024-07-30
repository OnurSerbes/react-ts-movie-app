import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async ({
  searchTerm, type, year, page = 1
}: {
  searchTerm: string,
  type?: string,
  year?: string,
  page?: number
}) => {
  const url = `${BASE_URL}&s=${searchTerm}${type ? `&type=${type}` : ''}${year ? `&y=${year}` : ''}&page=${page}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieDetails = async (imdbID: string) => {
  const url = `${BASE_URL}&i=${imdbID}&plot=full`;
  const response = await axios.get(url);
  return response.data;
};
