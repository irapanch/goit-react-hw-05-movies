import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '118036900edcb9373b4e9cf292470e68';

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const fetchTrendMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}trending/movie/day?api_key=${API_KEY}`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
export const fetchMoviesByQueryName = async query => {
  try {
    const { data } = await axios.get(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
export const fetchMovieDetailsById = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.

export const fetchMovieCast = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
export const fetchMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
