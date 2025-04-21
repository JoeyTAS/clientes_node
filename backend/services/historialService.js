const clienteProductoModel = require('../models/historialModel');

class ClienteProductoService {
  async getHistorial() {
    return await clienteProductoModel.getHistorialClientesProductos();
  }

  async getProductosPorCliente(id_cliente) {
    return await clienteProductoModel.getProductosByCliente(id_cliente);
  }

  async getClientesPorProducto(id_producto) {
    return await clienteProductoModel.getClientesByProducto(id_producto);
  }

  async asignarProducto(id_cliente, id_producto) {
    return await clienteProductoModel.addProductoToCliente(id_cliente, id_producto);
  }
}

module.exports = new ClienteProductoService();
