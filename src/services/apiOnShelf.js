import request from "../utils/request";
import prefix from "./version";

//接口37. 上架电影
export const addMovieOnShelf=(movieInfo)=>{
    return request(`${prefix}/movie`,{
        method:'POST',
        body:movieInfo
    })
};

//接口38. 修改电影信息
export const changeMovieOnshelf=(movieInfo)=>{
    return request(`${prefix}/movie`,{
        method:'PUT',
        body:movieInfo
    })
}

