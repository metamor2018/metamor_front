import axios from './axiosBase';

/**
 * 創作者の取得
 * @param form
 * @returns {AxiosPromise<any>}
 */
export function create(form) {
  return axios.post('/creator', form);
}

/**
 * 創作者の取得
 * @param creatorId
 * @returns {AxiosPromise<any>}
 */
export function findCreator(creatorId) {
  return axios.get(`/creator/${creatorId}`);
}

/**
 * ログインしている創作者の取得
 * @returns {AxiosPromise<any>}
 */
export function findLoginCreator() {
  return axios.get('/login/creator');
}
