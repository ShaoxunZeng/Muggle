import request from "../utils/request";

//接口1 登陆
export const login=({username="",password=""})=>{
    return request("/login", {
        method: "POST",
        body: {
            username,
            password
        }
    });
};

//接口2 注册
export const register=({username='',password=''})=>{
    return request('/register',{
        method:"POST",
        body:{
            username,
            password
        }
    })
};
