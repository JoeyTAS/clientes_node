const {Pool} = require('pg');

class Database{
    constructor(){
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'cliente',
            password: 'admin',
            port: 5432,
        });
    }

    query(text, params){
        return this.pool.query(text, params);
    }
}

module.exports = new Database();