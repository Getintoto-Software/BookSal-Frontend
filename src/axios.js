import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    withCredentials: true, // Make sure the cookies are sent with the request
});

// Add token to each request if it's available
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
}, error => Promise.reject(error));

export default apiClient;
