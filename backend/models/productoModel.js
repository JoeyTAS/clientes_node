const db = require('../config/db');

class ProductoModel {


    async getAllProductos() {
        const result = await db.query('SELECT * FROM productos');
        return result.rows;
    }

  
    async getProductoById(id) {
        const result = await db.query('SELECT * FROM productos WHERE id = $1', [id]);
        return result.rows[0];
    }

    async getProductoByName(nombre) {
        const result = await db.query('SELECT * FROM productos WHERE nombre = $1', [nombre]);
        return result.rows[0];
    }

    async createProducto({nombre, descripcion, precio, stock}) {
        const result = await db.query(
            'INSERT INTO productos(nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, descripcion, precio, stock]
        );
        return result.rows[0];
    }

    async updateProducto(id, {nombre, descripcion, precio}) {
        const result = await db.query(
            'UPDATE productos SET nombre = $1, descripcion = $2, precio = $3 WHERE id = $4 RETURNING *',
            [nombre, descripcion, precio, id]
        );
        return result.rows[0];
    }

    async deleteProducto(id) {
        const result = await db.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = new ProductoModel();
