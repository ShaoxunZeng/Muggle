import {getMovieInfoList} from "../services/apiMovies";


//根据movieId列表返回movieName列表
export const getMovieInfoById = (moviesIncluded) => {
    return getMovieInfoList(moviesIncluded).map(movieInfo => movieInfo.movieName);
};
