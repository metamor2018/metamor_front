import axios from './axiosBase';


export default function signup() {
  return axios.post('/account');
}
