import axios from 'axios';
import { getAccessToken } from '../auth';

axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.headers.common.Authorization = `Bearer ${getAccessToken()}`;

export default axios;
