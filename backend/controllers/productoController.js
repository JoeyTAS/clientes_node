const productoService = require('../services/productoService');
const httpStatus = require('../constants/httpStatusCodes'); // Suponiendo que tienes un archivo 'httpStatus.js' con los códigos de estado

class ProductoController {

    async getAllProductos(req, res) {
        try {
            const productos = await productoService.getAllProductos();
            res.status(httpStatus.OK).json(productos);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    async getProductoById(req, res) {
        const { id } = req.params;
        try {
            const producto = await productoService.getProductoById(id);
            if (producto) {
                res.status(httpStatus.OK).json(producto);
            } else {
                res.status(httpStatus.NOT_FOUND).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    async getProductoByName(req, res) {
        const { nombre } = req.params;
        try {
            const producto = await productoService.getProductoByName(nombre);
            if (producto) {
                res.status(httpStatus.OK).json(producto);
            } else {
                res.status(httpStatus.NOT_FOUND).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    async createProducto(req, res) {
        const { nombre, descripcion, precio, stock} = req.body;
        try {
            const nuevoProducto = await productoService.createProducto({ nombre, descripcion, precio, stock});
            res.status(httpStatus.CREATED).json(nuevoProducto);
        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
        }
    }

    async updateProducto(req, res) {
        const { id } = req.params;
        const { nombre, descripcion, precio } = req.body;
        try {
            const productoActualizado = await productoService.updateProducto(id, { nombre, descripcion, precio });
            if (productoActualizado) {
                res.status(httpStatus.OK).json(productoActualizado);
            } else {
                res.status(httpStatus.NOT_FOUND).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    async deleteProducto(req, res) {
        const { id } = req.params;
        try {
            const productoEliminado = await productoService.deleteProducto(id);
            if (productoEliminado) {
                res.status(httpStatus.OK).json(productoEliminado);
            } else {
                res.status(httpStatus.NOT_FOUND).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}

module.exports = new ProductoController();
