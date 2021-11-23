import axios from 'axios';

export default() => {
    const instance = axios.create({
        baseURL : 'http://localhost/api'
    });

    return instance;
}