import Axios from 'axios';

export const axiosInstance = Axios.create({ baseURL: 'http://192.168.178.50:4456' });
