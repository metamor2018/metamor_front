import axios from './axiosBase';

/**
 * 投稿を取得
 * @param worldId
 * @returns {AxiosPromise<any>}
 */
export function getStatusByWorldId(worldId) {
  return axios.get(`/world/${worldId}/status`);
}
