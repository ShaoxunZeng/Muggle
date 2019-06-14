import request from "../utils/request";
import prefix from "./version";

//接口46.查看影厅列表
export const getAllHalls=()=>{
    return request(`${prefix}/hall/all`,{
        method:'GET'
    })
};
