// src/axios.js
import axios from 'axios';

// Set default base URL for all Axios requests
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1/';  // Your Django backend API URL

// Add the token from localStorage (if it exists) to the Authorization header
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

export default axios;
