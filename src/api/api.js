import axios from 'axios';

const apiTest = axios.create({
	baseURL: 'http://localhost:4000',
});

export default apiTest;
