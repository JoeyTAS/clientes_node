// server.js
const express = require('express');
const cors = require('cors');
const clientesRoutes = require('./routers/clienteRouters'); // Importamos las rutas de productos
const productoRoutes = require('./routers/productoRouters');
const historialRoutes = require('./routers/historialRouters'); // Importamos el router de historial
// Importamos el router de productos

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    // Todas las rutas de productos se alojarán en /productos
    this.app.use('/clientes', clientesRoutes);
    this.app.use('/productos', productoRoutes);
    this.app.use('/cliente-producto', historialRoutes); // Usamos el router de historial
  }
  
  start() {
    const PORT = process.env.PORT || 3001;
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  }
}

const server = new Server();
server.start();