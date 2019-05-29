import request from "../utils/request";

export const login=({username="",password=""})=>{
    return request("/login", {
        method: "POST",
        body: {
            username,
            password
        }
    });
};

export const register=({username='',password=''})=>{
    return request('/register',{
        method:"POST",
        body:{
            username,
            password
        }
    })
};
