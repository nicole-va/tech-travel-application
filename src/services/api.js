import axios from "axios";

const api = axios.create({
    baseURL: 'https://639f7c7b5eb8889197fd8ad1.mockapi.io'
});

export default api;