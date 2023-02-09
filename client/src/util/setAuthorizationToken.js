import axios from 'axios';

export default function setAuthorizationToken(token) {
    axios.defaults.baseURL = 'http://localhost:3000';
    if (token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
