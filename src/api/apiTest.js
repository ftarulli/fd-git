import axios from 'axios';

const apiTest = axios.create({
	baseURL: 'https://proyectofinalg2-back.onrender.com',
});

export default apiTest;
