const clienteProductoService = require('../services/historialService');
const HTTP = require('../constants/httpStatusCodes');  // Importar las constantes HTTP

class ClienteProductoController {
  async historial(req, res) {
    try {
      const historial = await clienteProductoService.getHistorial();
      res.status(HTTP.OK).json(historial);  // Usar HTTP.OK para el estado 200
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: error.message });  
    }
  }

  async productosPorCliente(req, res) {
    try {
      const { id_cliente } = req.params;
      const productos = await clienteProductoService.getProductosPorCliente(id_cliente);
      res.status(HTTP.OK).json(productos);  // Usar HTTP.OK para el estado 200
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: error.message });  
    }
  }

  async clientesPorProducto(req, res) {
    try {
      const { id_producto } = req.params;
      const clientes = await clienteProductoService.getClientesPorProducto(id_producto);
      res.status(HTTP.OK).json(clientes);  // Usar HTTP.OK para el estado 200
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: error.message });  
    }
  }

  async asignar(req, res) {
    try {
      const { id_cliente, id_producto } = req.body;
      const relacion = await clienteProductoService.asignarProducto(id_cliente, id_producto);
      res.status(HTTP.CREATED).json(relacion);  // Usar HTTP.CREATED para el estado 201
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: error.message });  
    }
  }
}

module.exports = new ClienteProductoController();

