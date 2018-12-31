import axios from './axiosBase';

/**
 * 創作者の作成
 */
export default function create(form) {
  return axios.post('/creator', form);
}
