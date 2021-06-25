import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  timeout: 30000,
  headers: {
    Authorization: 'Bearer {token}',
    'client-id': '{client-id}',
  },
});

export default axiosInstance;
