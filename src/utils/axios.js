import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://notflex-backend.onrender.com',
});

export default instance; 