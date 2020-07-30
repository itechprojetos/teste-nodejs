import 'dotenv/config';
import { getToken } from './auth';

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333'
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

export default api;
