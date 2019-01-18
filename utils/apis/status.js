import axios from './axiosBase';

/**
 * 投稿を取得
 * @param worldId
 * @param line
 * @returns {AxiosPromise<any>}
 */
export function getStatusByWorldId(worldId, line) {
  return axios.get(`/world/${worldId}/status/${line}`);
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
