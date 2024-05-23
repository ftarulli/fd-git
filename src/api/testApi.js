import axios from 'axios';

const testApi = axios.create({
    baseURL: 'http://localhost:9099'
});


testApi.interceptors.request.use((config) => {
    config.headers = {
        'TokenJWT': localStorage.getItem('token'),
    };
    return config;
} );

export default testApi;