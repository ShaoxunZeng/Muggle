import request from "../utils/request";

export const getMoviesOnShelf = () => {
  return request("/movie/popular", {
    method: "GET",
  });
};


