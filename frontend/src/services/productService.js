import axios from "axios";

const API_URL = "http://localhost:3001/productos"; // Cambia esto según tu configuración

export const getAllProducts = () => axios.get(API_URL);
export const getProductById = (id) => axios.get(`${API_URL}/id/${id}`);
export const getProductByName = (name) => axios.get(`${API_URL}/name/${name}`);
export const createProduct = (data) => axios.post(API_URL, data);
export const updateProduct = async (id, product) => {
    return await axios.put(`http://localhost:3001/productos/${id}`, product); // Asegúrate de que esta URL coincida con el backend
};
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);


