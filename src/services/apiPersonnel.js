import request from "../utils/request";
import prefix from "./version";

//接口47.新增管理员
export const addManager = (newManagerInfo) => {
    return request(`${prefix}/personnel/manager`, {
        method: 'POST',
        body: newManagerInfo
    })
};

//接口48.删除管理员
export const delManager = (managerId) => {
    return request(`${prefix}/personnel/manager`, {
        method: 'DELETE',
        body: managerId
    })
};

//接口49.查看管理员列表
export const getAllManagers = () => {
    return request(`/personnel/manager/list`, {
        method: 'GET'
    })
};
