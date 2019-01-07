import axios from './axiosBase';


export function getWorlds() {
  return axios.get('/world');
}

export function findWorld(worldId) {
  return axios.get(`/world/${worldId}`);
}
