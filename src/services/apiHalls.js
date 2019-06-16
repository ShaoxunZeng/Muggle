import request from "../utils/request";
import prefix from "./version";

//46.查看影厅列表
export const getAllHalls = () => {
  return request(`${prefix}/hall/all`, {
    method: 'GET'
  })
};

//45.新增影厅
export const addHall = (hall) => {
  return request(`${prefix}/hall`, {
    method: 'POST',
    body: hall
  })
};
