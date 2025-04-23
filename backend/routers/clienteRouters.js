const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/',(req,res) => clienteController.getAllClientes(req,res));

router.get('/:dni', (req, res) => clienteController.getClienteByDni(req, res));
router.get('/id/:id', (req, res) => clienteController.getClienteById(req, res));

router.post('/', (req, res) => clienteController.createCliente(req, res));

router.put('/:id', (req, res) => clienteController.updateCliente(req, res));
router.put('/dni/:dni', (req, res) => clienteController.updateClienteByDni(req, res));

router.delete('/:id', (req, res) => clienteController.deleteCliente(req, res));
router.delete('/dni/:dni', (req, res) => clienteController.deleteClienteByDni(req, res));

router.get('/historial-cliente/:id_cliente',  (req, res) => clienteController.getHistorialClienteById(req, res));

module.exports = router;

