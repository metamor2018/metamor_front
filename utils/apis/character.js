import axios from './axiosBase';
import { getCreator } from '../auth';

/**
 * キャラクターの取得
 * @param creatorId
 * @returns {AxiosPromise<any>}
 */
export function getCharacterByCreatorId(creatorId, line) {
  return axios.get(`/creator/${creatorId}/character/${line}`);
}

export function createCharacter(form) {
  const creator = getCreator();
  form.creatorId = creator.id;
  return axios.post('/character', form);
}

export function findCharacter(characterId) {
  return axios.get(`/character/${characterId}`);
}

export function getCharacterByWorldIdAndCreatorId(worldId, creatorId) {
  return axios.get(`/world/${worldId}/creator/${creatorId}`);
}

export function getNonEntryCharacter(worldId, creatorId) {
  return axios.get(`/world/${worldId}/creator/${creatorId}/nonEntry`);
}
