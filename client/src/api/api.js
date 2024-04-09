import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4001/api',
  withCredentials: true, // Include credentials in requests
});

export default api;
