import axios from './axiosBase';


export function getWorld() {
  return axios.get('/world');
}

export function getWorldByCreatorId(creatorId) {
  return axios.get(`/creator/${creatorId}/world`);
}
