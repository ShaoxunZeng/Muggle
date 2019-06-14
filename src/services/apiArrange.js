import request from "../utils/request";
import prefix from "./version";

//接口40.新增电影排片
export const addScene = (newScene) => {
    return request(`${prefix}/scene`, {
        method: 'POST',
        body: newScene
    })
};

//接口52.删除电影排片
export const deleteScene = (sceneId) => {
    return request(`${prefix}/scene`, {
        method: 'DELETE',
        body: {'sceneId': sceneId}
    })
};
