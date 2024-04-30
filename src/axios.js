import axios from "axios";

const instance = axios.create({
    baseURL: 'kumisbackend.vercel.app',
    headers: { Authorization: window.localStorage.getItem('token') },
})

export default instance
