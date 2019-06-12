import request from "../utils/request";
import prefix from "./version";

//接口3 获取当前已上架电影信息（七部热门影片）
export const getPopularMovies = () => {
    return request(`${prefix}/movie/popular`, {
        method: "GET",
    });
};


//接口4. 获取当前已上架所有影片
export const getMoviesOnShelf = () => {
    return request(`${prefix}/movie/onshelf`, {
        methods: "GET"
    })

};

//接口5. 获取某部电影详情
export const getMovieDetails = (movieId) => {
    return request(`${prefix}/movie/detail/${movieId}`, {
        method: "GET",
    });
};


//接口36. 查看电影评价
export const getMovieComment = (movieId) => {
    return request(`${prefix}/movie/comment/?movieId=${movieId}`, {
        method: "GET",
    });
};

//接口50. 根据movieId列表获取movieDetail列表
//todo() url写法存疑
export const getMovieInfoList=(movieIds)=>{
    return request(`${prefix}/movie/detail/batch?movieIds=${movieIds}`,{
        method:"GET"
    })
};
