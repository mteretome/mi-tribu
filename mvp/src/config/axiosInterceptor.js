import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from './env';

let headers = {};

BACKEND_URL = "https://mi-tribu-mobile-app.herokuapp.com"

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    headers,
});


axiosInstance.interceptors.request.use(
    (request) => {
    console.log('Starting Request', JSON.stringify(request.params, null, 2))
    return request;
    },

    async (config) => {
        // Do something before request is sent
        return config;
      },
    (error)=>{
        console.log("axios error: ", error);
        return Promise.reject(error);

    },
    
);

export default axiosInstance;
