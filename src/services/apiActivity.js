import request from "../utils/request";
import prefix from "./version";

// 接口19 获取优惠活动
export const getAllActivities = () => {
    return request(`${prefix}/strategy/event`, {
        method: "GET",
    });
};

//接口20. 新增优惠活动
export const addActivity = (activityInfo) => {
    return request(`${prefix}/strategy/event`, {
        method: "POST",
        body: activityInfo
    })

};

//接口21. 删除优惠活动
export const delActivity = (info) => {
    return request(`${prefix}/strategy/event`, {
        method: "DELETE",
        body: info
    })
};

//接口22. 获取所有用户的简要信息 注：负责筛选赠送优惠券的对象
export const getBriefUserInfo = () => {
    return request(`${prefix}/user/brief_info`, {
        method: 'GET'
    })
};

//接口23. 赠送优惠券
export const sendCoupon = (info) => {
    return request(`${prefix}/strategy/coupon_gift`, {
        method: 'POST',
        body: info
    })
};


