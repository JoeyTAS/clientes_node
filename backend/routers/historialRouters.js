const express = require('express');
const router = express.Router();
const controller = require('../controllers/historialController');

router.get('/historial', controller.historial);
router.get('/cliente/:id_cliente', controller.productosPorCliente);
router.get('/producto/:id_producto', controller.clientesPorProducto);
router.post('/asignar', controller.asignar);

module.exports = router;
