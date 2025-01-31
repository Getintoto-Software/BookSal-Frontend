import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    // withCredentials: true, // Make sure the cookies are sent with the request
});

// Add token to each request if it's available
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;

    // const csrfToken = getCookie('csrftoken'); // Function to get CSRF token from cookies
    // if (csrfToken) {
    //     config.headers['X-CSRFToken'] = csrfToken;
    // }

    return config;
}, error => Promise.reject(error));

// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
// }

export default apiClient;
