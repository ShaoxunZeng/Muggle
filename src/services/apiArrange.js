import request from "../utils/request";
import prefix from "./version";

//接口39.获取影厅排片情况
export const getAllArranges = (hallId, date) => {
    return request(`${prefix}/scene/info/of_hall?hallName=${hallId}&date=${date}`, {
        method: 'GET',
    })
};

//接口40.新增电影排片
export const addScene = (newScene) => {
    return request(`${prefix}/scene`, {
        method: 'POST',
        body: newScene
    })
};

//41.修改电影排片
export const changeScene = (scene) => {
    return request(`${prefix}/scene`, {
        method: 'PUT',
        body: scene
    })
};

//接口52.删除电影排片
export const deleteScene = (sceneId) => {
    return request(`${prefix}/scene`, {
        method: 'DELETE',
        body: {'sceneId': sceneId}
    })
};
