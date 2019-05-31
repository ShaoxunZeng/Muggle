import request from "../utils/request";
import prefix from "./version";

//接口1. 登陆
export const login=({username="",password=""})=>{
    return request(`${prefix}/login`, {
        method: "POST",
        body: {
            username,
            password
        }
    });
};

//接口2. 注册
export const register=({username='',password=''})=>{
    return request(`${prefix}/register`,{
        method:"POST",
        body:{
            username,
            password
        }
    })
};
