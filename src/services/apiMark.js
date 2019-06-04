import request from "../utils/request";
import prefix from "./version";

//接口24.查看想看列表
export const getAllMarks=()=>{
    return request(`${prefix}/user/mark`,{
        method:'GET'
    })
};
