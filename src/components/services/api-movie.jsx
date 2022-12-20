import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const KEY = 'd9a5502e7ecfc2f8fab8d65f4cbb6057';

export const popularMovies = async (page) => {
  const response = await axios.get(
    `trending/movie/day?api_key=${KEY}&page=${page}`
  );

  return response.data;
};

export const movieByQuery = async (query,page) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );

  return response.data;
};

export const movieById = async id => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);

  return response.data;
};

export const movieCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const movieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
