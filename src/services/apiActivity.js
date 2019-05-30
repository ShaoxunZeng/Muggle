import request from "../utils/request";

// 接口19 获取优惠活动
export const getAllActivities = () => {
    return request(`/strategy/event`, {
        method: "GET",
    });
};

//接口20. 新增优惠活动
export const addActivity = (activityInfo) => {
    return request(`/strategy/event`, {
        method: "POST",
        body: activityInfo
    })

};

//接口21. 删除优惠活动
export const delActivity = (eventId) => {
    return request(`/strategy/event`, {
        method: "DELETE",
        body:eventId
    })
};

