import axios from 'axios'

export const tokenApi = axios.create({
    baseURL: "https://pustaka-production.up.railway.app/api/v1", 
    headers: {
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
    },
}); 