import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  timeout: 30000,
  headers: {
    Authorization: 'Bearer q1tj342v2sux05py69cd9vvloekl5z',
    'client-id': 'ozvley86v1vz84w7ermd7tp0868w0y',
  },
});

export default axiosInstance;
