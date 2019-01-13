import axios from './axiosBase';

/**
 * 投稿を取得
 * @param worldId
 * @returns {AxiosPromise<any>}
 */
export function getStatusByWorldId(worldId) {
  return axios.get(`/world/${worldId}/status`);
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
