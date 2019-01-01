import axios from './axiosBase';


export default function getWorlds() {
  return axios.get('/world');
}
