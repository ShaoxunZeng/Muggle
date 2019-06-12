import request from "../utils/request";
import prefix from "./version";

//接口8.选座(生成订单)
export const createTicketOrder = (ticketInfo) => {
  return request(`${prefix}/scene/order/seat/selection`, {
    method: 'POST',
    body: ticketInfo
  })
};

//接口11.会员支付
export const payingWithMember = (ticketInfo) => {
  return request(`${prefix}/order/ticket/payment/member`, {
    method: 'POST',
    body: ticketInfo
  })
};

//接口12.第三方支付
export const payingWithOthers = (ticketInfo) => {
  return request(`${prefix}/order/ticket/payment/third_party`, {
    method: 'POST',
    body: ticketInfo
  })
};

//接口13.查看所有购票订单
export const getAllTicketOrders = () => {
  return request(`${prefix}/order/ticket`, {
    method: 'GET'
  })
};

//接口14.取消订单
export const cancelOrder = (orderInfo) => {
  return request(`${prefix}/order/ticket/cancellation`, {
    method: 'PUT',
    body: orderInfo
  })
};

//接口17. 用户退票
export const returnTicket = (ticketInfo) => {
  return request(`${prefix}/order/ticket/refund`, {
    method: 'POST',
    body: ticketInfo
  })
};
