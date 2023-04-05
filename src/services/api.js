import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketmovies29-api.onrender.com",
})