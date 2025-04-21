const clienteModel = require('../services/clienteService');
const HTTP = require('../constants/httpStatusCodes');

class   ClienteController {
    async getAllClientes(req, res) {
        try {
            const clientes = await clienteModel.getAllClientes();
            res.status(HTTP.OK).json(clientes);
        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    async getClienteById(req, res) {
        const { id } = req.params;
        try {
            const cliente = await clienteModel.getClienteById(id);
            if (cliente) {
                res.status(HTTP.OK).json(cliente);
            } else {
                res.status(HTTP.NOT_FOUND).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: 'Error en obtener cliente.', error });
        }
    }

    async getClienteByDni(req, res) {
        const { dni } = req.params;
        try {
            const cliente = await clienteModel.getClienteByDni(dni);
            if (cliente) {
                res.status(HTTP.OK).json(cliente);
            } else {
                res.status(HTTP.NOT_FOUND).json({ message: 'Cliente no encontrado' });
            }

        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: 'Error en obtener cliente' })

        }
    }

    async createCliente(req, res) {
        const { dni, nombre, apepaternos, apematernos, fechanacimiento } = req.body;
        try {
            const cliente = await clienteModel.createCliente({ dni, nombre, apepaternos, apematernos, fechanacimiento });
            res.status(HTTP.CREATED).json(cliente); 
        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: 'Error en crear cliente', error });
        }
    }  

    async updateCliente(req, res) {
        const { id } = req.params;
        const { dni, nombre, apepaternos, apematernos, fechanacimiento } = req.body;
        try {
            const clienteUpdate = await clienteModel.updateCliente(id, { dni, nombre, apepaternos, apematernos, fechanacimiento });
            if (clienteUpdate) {
                res.status(HTTP.OK).json(clienteUpdate); 
            } else {
                res.status(HTTP.NOT_FOUND).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: 'Error en actualizar cliente', error });
        }
    }


    async updateClienteByDni(req, res) {
        const { dni } = req.params;
        const { nombre, apepaternos, apematernos, fechanacimiento } = req.body;
        try {
            const clienteUpdate = await clienteModel.updateClienteByDni(dni, { nombre, apepaternos, apematernos, fechanacimiento });
            if (clienteUpdate) {
                res.status(HTTP.OK).json(clienteUpdate); 
            } else {
                res.status(HTTP.NOT_FOUND).json({ message: 'Cliente no encontrado por Dni' });
            }
        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: 'Error en actualizar cliente por Dni', error });
        }
    }
    async deleteCliente(req, res) {
        const { id } = req.params;
        try {
            const clienteDelete = await clienteModel.deleteCliente(id);
            if (clienteDelete) {
                res.status(HTTP.OK).json(clienteDelete); 
            } else {
                res.status(HTTP.NOT_FOUND).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: 'Error en eliminar cliente', error });
        }
    }
    async deleteClienteByDni(req, res) {
        const { dni } = req.params;
        try {
            const clienteDelete = await clienteModel.deleteClienteByDni(dni);
            if (clienteDelete) {
                res.status(HTTP.OK).json(clienteDelete); // Usamos el código 200 de HTTP
            } else {
                res.status(HTTP.NOT_FOUND).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: 'Error en eliminar cliente por Dni', error });
        }
    }  
        

}

module.exports = new ClienteController();
