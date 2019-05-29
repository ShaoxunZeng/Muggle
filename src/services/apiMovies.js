import request from "../utils/request";

export const getMoviesOnShelf = () => {
  return request(`/movie/popular`, {
    method: "GET",
  });
};

export const getMovieDetails = (movieId) => {
  return request(`/movie/detail/${movieId}`, {
    method: "GET",
  });
};



