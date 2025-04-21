
const db = require('../config/db');

class HistorialModel {


   // Obtener historial de relaciones cliente-producto con detalles
   async getHistorialClientesProductos() {
    const result = await db.query(`
      SELECT 
        c.id AS id_cliente,
        c.nombre AS nombre_cliente,
        p.id AS id_producto,
        p.nombre AS nombre_producto,
        p.precio AS precio_producto
      FROM 
        cliente_producto cp
      JOIN 
        clientes c ON cp.id_cliente = c.id
      JOIN 
        productos p ON cp.id_producto = p.id
    `);
    return result.rows;
  }
    // Obtener todos los productos asignados a un cliente
  async getProductosByCliente(id_cliente) {
    const result = await db.query(
      'SELECT p.* FROM productos p INNER JOIN cliente_producto cp ON p.id = cp.id_producto WHERE cp.id_cliente = $1',
      [id_cliente]
    );
    return result.rows;
  }

  // Obtener todos los clientes que compraron un producto
  async getClientesByProducto(id_producto) {
    const result = await db.query(
      'SELECT c.* FROM clientes c INNER JOIN cliente_producto cp ON c.id = cp.id_cliente WHERE cp.id_producto = $1',
      [id_producto]
    );
    return result.rows;
  }

  // Agregar una relación cliente-producto
  async addProductoToCliente(id_cliente, id_producto) {
    const result = await db.query(
      'INSERT INTO cliente_producto(id_cliente, id_producto) VALUES ($1, $2) RETURNING *',
      [id_cliente, id_producto]
    );
    return result.rows[0];
  }
}

module.exports = new HistorialModel();
