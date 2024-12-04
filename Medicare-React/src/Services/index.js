//se importa aqui la URL de la base de datos usando axios
import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: false,
});

export default api;