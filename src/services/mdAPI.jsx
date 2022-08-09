import axios from 'axios';

const API_KEY = '7a4cd4317772102a9b88ef6a54b71590';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendings = async () => {
  return axios.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchSearchMovies = async search => {
  return axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: search,
    },
  });
};

export const fetchDetails = async movieId => {
  return axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchCredits = async movieId => {
  return axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchReviews = async movieId => {
  return axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
