import axios from 'axios'
import { get } from 'http';


axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = `Bearer ${token}`;
    return config;
})

export default {
    post(url,data) {
        return axios.post(url,data);
    },

    get(url) {
        return axios.get(url);
    }
}