import axios from 'axios'

export const customApi = axios.create({
    baseURL: 'https://pustaka-production.up.railway.app/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
})