import request from "../utils/request";
import prefix from "./version";

//接口15. 获取退票策略（总经理+用户）
export const getRefundStrategy = () => {
    return request(`${prefix}/strategy/refund`, {
        method: 'GET'
    })
};

//接口16。修改退票策略（总经理）
export const changeRefundStrategy = (newRefundStrategy) => {
    return request(`${prefix}/strategy/refund`, {
        method: 'PUT',
        body: newRefundStrategy
    })
};

//接口27. 查看所有类型会员卡信息（总经理+用户）
export const getMemberCards = () => {
    return request(`${prefix}/strategy/member`, {
        method: 'GET'
    })
};

//接口28. 新增会员卡类型（总经理）
export const addMemberCard = (newMemberCard) => {
    return request(`${prefix}/strategy/member`, {
        method: 'POST',
        body: newMemberCard
    })
};

//接口29. 删除会员卡类型（总经理）
export const delMemberCard = (memberStrategyId) => {
    return request(`${prefix}/strategy/member`, {
        method: 'DELETE',
        body: memberStrategyId
    })
};

//接口30. 修改某个类别会员卡信息（总经理）
export const changeMemberCard=(newMemberCard)=>{
    return request(`${prefix}/strategy/member`,{
        method:'PUT',
        body:newMemberCard
    })
};
