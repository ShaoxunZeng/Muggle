import request from "../utils/request";
import prefix from "./version";

//接口18. 查看优惠券
export const getAllCoupons=()=>{
    return request(`${prefix}/user/coupon`,{
        method:'GET'
    })
};

