import request from "../utils/request";
import prefix from "./version";

//接口25. 获取会员信息
export const getMemberInfo = () => {
    return request(`${prefix}/member/info`, {
        method: 'GET'
    })
};

//接口26. 购买会员卡
export const purchaseMemberCard = (paymentInfo) => {
    return request(`${prefix}/order/member/purchase/payment`, {
        method: 'POST',
        body: paymentInfo
    })
};

//接口31. 充值会员卡
export const rechargeMemberCard = (paymentInfo) => {
    return request(`${prefix}/order/member/recharge/payment`, {
        method: 'POST',
        body: paymentInfo
    })
};

//接口32. 查看充值记录(包括首次购买记录)
export const getRechargeHistory = () => {
    return request(`${prefix}/order/member/recharge/history`, {
        method: 'GET'
    })
};
