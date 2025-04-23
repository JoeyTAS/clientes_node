const productoModel = require('../models/productoModel');

class ProductoService {

    async getAllProductos() {
        return await productoModel.getAllProductos();
    }


    async getProductoById(id) {
        const producto = await productoModel.getProductoById(id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return producto;
    }


    async getProductoByName(nombre) {
        const producto = await productoModel.getProductoByName(nombre);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return producto;
    }


    async createProducto(data) {
        const { nombre, descripcion, precio, stock } = data;
        try{
            if (!nombre || !descripcion || !precio || !stock) {
                throw new Error('Faltan datos necesarios para crear el producto');
            }
        }catch(e) {
            throw new Error('Error al crear el producto: ' + e.message);
        }
        return await productoModel.createProducto(data);
    }


    async updateProducto(id, data) {
        const { nombre, descripcion, precio } = data;
        const productoExistente = await productoModel.getProductoById(id);
        if (!productoExistente) {
            throw new Error('Producto no encontrado');
        }
        return await productoModel.updateProducto(id, { nombre, descripcion, precio });
    }

 
    async deleteProducto(id) {
        const productoExistente = await productoModel.getProductoById(id);
        if (!productoExistente) {
            throw new Error('Producto no encontrado');
        }
        return await productoModel.deleteProducto(id);
    }
}

module.exports = new ProductoService();
