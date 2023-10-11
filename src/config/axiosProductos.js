import axios from "axios";

const axiosProductos = axios.create({
  baseURL: 'https://dummyjson.com'
});

export default axiosProductos;