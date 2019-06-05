import request from "../utils/request";
import prefix from "./version";

//接口13.查看所有购票订单
export const getAllTicketOrders = () => {
  return request(`${prefix}/order/ticket`, {
    method: 'GET'
  })
};
