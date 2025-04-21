const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Obtener todos los productos
router.get('/', (req, res) => productoController.getAllProductos(req, res));

// Obtener un producto por nombre
router.get('/nombre/:nombre', (req, res) => productoController.getProductoByName(req, res));

// Obtener un producto por ID
router.get('/id/:id', (req, res) => productoController.getProductoById(req, res));

// Crear un nuevo producto
router.post('/', (req, res) => productoController.createProducto(req, res));

// Actualizar un producto por ID
router.put('/:id', (req, res) => productoController.updateProducto(req, res));

// Actualizar un producto por nombre
router.put('/nombre/:nombre', (req, res) => productoController.updateProductoByName(req, res));

// Eliminar un producto por ID
router.delete('/:id', (req, res) => productoController.deleteProducto(req, res));

// Eliminar un producto por nombre
router.delete('/nombre/:nombre', (req, res) => productoController.deleteProductoByName(req, res));

module.exports = router;
