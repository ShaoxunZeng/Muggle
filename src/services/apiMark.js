import request from "../utils/request";
import prefix from "./version";

//接口6. 标记为想看
export const mark=(info)=>{
    return request(`${prefix}/movie/mark`,{
        method:'POST',
        body: info
    })
};

//接口24.查看想看列表
export const getAllMarks = () => {
    return request(`${prefix}/user/mark`, {
        method: 'GET'
    })
};
