import axios from './axiosBase';

export function signup() {
  // getAccessTokenを使うとなぜかtokenの認証がコケるので、直接取得
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return axios.post('/account');
}
