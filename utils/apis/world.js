import axios from './axiosBase';


export function getWorld() {
  return axios.get('/world');
}

export function getWorldByCreatorId(creatorId) {
  return axios.get(`/creator/${creatorId}/world`);
}

export function findWorld(worldId) {
  return axios.get(`/world/${worldId}`);
}

export function entryWorld(characterId, worldId) {
  return axios.post('/world/entry', {
    characterId,
    worldId,
  });
}
