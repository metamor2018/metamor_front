import axios from './axiosBase';

/**
 * キャラクターの取得
 * @param creatorId
 * @returns {AxiosPromise<any>}
 */
export function getCharacterByCreatorId(creatorId, line) {
  return axios.get(`/creator/${creatorId}/character/${line}`);
}
