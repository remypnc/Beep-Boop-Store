import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localost:3000',
    timeout: 10000,
    headers: {
        accept: 'aplication/json'
    }
})