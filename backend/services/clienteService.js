const clienteModel = require('../models/clienteModel');

class ClienteService {

    async getAllClientes() {
        return await clienteModel.getAllClientes();
    }
    // Metodos para buscar por ID y DNI
    async getClienteByDni(dni) {
        return await clienteModel.getClienteByDni(dni);
    }
    
    async getClienteById(id) {
        return await clienteModel.getClienteById(id);
    }
    //hasta aqui
    
    async createCliente(data) {
        return await clienteModel.createCliente(data);
    }
   
    async updateCliente(id, data) {
        return await clienteModel.updateCliente(id, data);
    }
    async updateClienteByDni(dni, data) {
        return await clienteModel.updateClienteByDni(dni, data);
    }
    async deleteCliente(id) {
        return await clienteModel.deleteCliente(id);
    }
    async deleteClienteByDni(dni) {
        return await clienteModel.deleteClienteByDni(dni);
    }
    async getHistorialClienteById(id_cliente) {
        return await clienteModel.getHistorialClienteById(id_cliente);
    }
}
module.exports = new ClienteService();