const clienteProductoService = require('../services/historialService');

class ClienteProductoController {
  async historial(req, res) {
    try {
      const historial = await clienteProductoService.getHistorial();
      res.status(200).json(historial);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async productosPorCliente(req, res) {
    try {
      const { id_cliente } = req.params;
      const productos = await clienteProductoService.getProductosPorCliente(id_cliente);
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async clientesPorProducto(req, res) {
    try {
      const { id_producto } = req.params;
      const clientes = await clienteProductoService.getClientesPorProducto(id_producto);
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async asignar(req, res) {
    try {
      const { id_cliente, id_producto } = req.body;
      const relacion = await clienteProductoService.asignarProducto(id_cliente, id_producto);
      res.status(201).json(relacion);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ClienteProductoController();
