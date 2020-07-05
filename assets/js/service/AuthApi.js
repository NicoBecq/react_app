import axios from 'axios';
import decoder from 'jwt-decode';
import { setUser } from "./UserService";

function login(credentials) {
    return axios
        .post('/login', credentials)
        .then(response => {
            console.log(response.headers);
            // const data = decoder(response.data.token);
            // setUser(data);
        });

}

function logout() {
    return axios.get('/logout').then(response => {
        delete axios.defaults.headers['Authorization'];
    });
}

function init() {
    axios.get('/')
}

export default {
    login,
    logout,
    init
};