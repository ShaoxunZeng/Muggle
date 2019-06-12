import request from "../utils/request";
import prefix from "./version";

//接口33. 查看消息通知
export const getAllMessage=()=>{
    return request(`${prefix}/user/message`,{
        method:'GET'
    })
};

//接口34. 获取用户未读消息数
export const getNewMsgNum=()=>{
    return request(`${prefix}/user/message/unread_num`,{
        method:'GET'
    })
};

//接口35. 发送电影评价
export const sendComment=(comment)=>{
    return request(` ${prefix}/movie/comment`,{
        method:'POST',
        body:comment
    })
};


