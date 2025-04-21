const db = require('../config/db');

class ClienteModel {

    async getAllClientes() {
        const result = await db.query('SELECT * FROM clientes');
        return result.rows;
    }

    async getClienteByDni(dni) {
        const result = await db.query('SELECT * FROM clientes WHERE dni = $1', [dni]);
        return result.rows[0];
    }
    async getClienteById(id){
        const result = await db.query('SELECT * FROM clientes WHERE id = $1', [id]);
        return result.rows[0];
    }
    async createCliente({dni, nombre, apepaternos, apematernos, fechanacimiento}){
        const result = await db.query('INSERT INTO clientes(dni,nombre,apepaternos,apematernos,fechanacimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *', [dni, nombre, apepaternos, apematernos, fechanacimiento]);
        return result.rows[0];
    }

    async updateCliente(id, {dni, nombre, apepaternos, apematernos, fechanacimiento}){
        const result = await db.query('UPDATE clientes SET dni = $1, nombre = $2, apepaternos = $3, apematernos = $4, fechanacimiento = $5 WHERE id = $6 RETURNING *', [dni, nombre, apepaternos, apematernos, fechanacimiento, id]);
        return result.rows[0];
    }
    async updateClienteByDni(dni, {nombre, apepaternos, apematernos, fechanacimiento}){
        const result = await db.query('UPDATE clientes SET nombre = $1, apepaternos = $2, apematernos = $3, fechanacimiento = $4 WHERE dni = $5 RETURNING *', [nombre, apepaternos, apematernos, fechanacimiento, dni]);
        return result.rows[0];
    }

    async deleteCliente(id){
        const result = await db.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
    async deleteClienteByDni(dni){
        const result = await db.query('DELETE FROM clientes WHERE dni = $1 RETURNING *', [dni]);
        return result.rows[0];
    }
    

}

module.exports = new ClienteModel();
