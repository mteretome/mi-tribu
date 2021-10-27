import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from './env';

let headers = {};

BACKEND_URL = "https://e2b2-160-39-164-216.ngrok.io"

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    auth: {
        username: 'mitribu',
        password: 'Mi.Tribu12!'
      },
    headers,
});

console.log('envs.Backend_url',BACKEND_URL);

axiosInstance.interceptors.request.use(

    async (config) => {
        // Do something before request is sent
        return config;
      },
    (error)=>{
        return Promise.reject(error);

    },
    
);

export default axiosInstance;
