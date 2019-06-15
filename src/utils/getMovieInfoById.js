import {getMovieDetails, getMovieInfoList} from "../services/apiMovies";


//根据movieId列表返回movieName列表
export const getMovieInfoById = (moviesIncluded) => {
    let movieNameList = []
    moviesIncluded.map(movieId => {
        getMovieDetails(movieId).then(res => {
            movieNameList.push(res.movieName)
        })
    });
    return movieNameList
};
