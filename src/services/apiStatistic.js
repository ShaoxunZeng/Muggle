import request from "../utils/request";
import prefix from "./version";

//接口42.查看电影想看人数
export const getMovieLikeNumById = (movieId) => {
    return request(`${prefix}/movie/statistics/favor_num?movieId=${movieId}`, {
        method: 'GET'
    })
};

//接口43. 查看电影上座率
export const getMovieAttendanceById = (movieId) => {
    return request(`${prefix}/movie/statistic/attendance_rate?movieId=${movieId}`, {
        method: 'GET'
    })
};

//接口44. 查看电影票房
export const getMovieBoxOfficeById = (movieId) => {
    return request(`${prefix}/movie/statistic/box_office?movieId=${movieId}`, {
        method: 'GET'
    })
};

