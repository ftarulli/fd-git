import axios from 'axios';

const apiTest = axios.create({
	baseURL: 'http://localhost:4002',
});

export default apiTest;
