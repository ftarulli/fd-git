import axios from 'axios';

const testApi = axios.create({
	baseURL: 'https://proyectofinalg2-back.onrender.com/',
});

testApi.interceptors.request.use((config) => {
	config.headers = {
		TokenJWT: localStorage.getItem('token'),
	};
	return config;
});

export default testApi;
