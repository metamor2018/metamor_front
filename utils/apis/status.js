import axios from './axiosBase';

/**
 * 投稿を取得
 * @param worldId
 * @param statusId
 * @returns {AxiosPromise<any>}
 */
export function getStatusByWorldId(worldId, statusId = null) {
  return axios.get(`/world/${worldId}/status`, { params: { statusId } });
}


/**
 * 投稿を作成する
 * @param characterId
 * @param worldId
 * @param form
 * @returns {AxiosPromise<any>}
 */
export function postStatus(characterId, worldId, form) {
  return axios.post(`/character/${characterId}/world/${worldId}`, form);
}


export function getToLast(worldId, statusId) {
  return axios.get(`/world/${worldId}/status/${statusId}`);
}
