import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=674f2afb10fc226dc5b1544737132820

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;