## 🌐 Endpoints de la API

### 🧑‍🤝‍🧑 Clientes

| Método | Ruta | Descripción | Link |
|--------|------|-------------|------|
| `GET` | `/clientes` | Obtiene todos los clientes | [http://localhost:3001/clientes](http://localhost:3001/clientes) |
| `GET` | `/clientes/{dni}` | Obtiene un cliente por DNI | [http://localhost:3001/clientes/12345678](http://localhost:3001/clientes/12345678) |
| `GET` | `/clientes/id/{id}` | Obtiene un cliente por ID | [http://localhost:3001/clientes/id/1](http://localhost:3001/clientes/id/1) |
| `POST` | `/clientes` | Crea un nuevo cliente | [http://localhost:3001/clientes](http://localhost:3001/clientes) |
| `PUT` | `/clientes/id/{id}` | Actualiza un cliente existente | [http://localhost:3001/clientes/id/1](http://localhost:3001/clientes/id/1) |
| `DELETE` | `/clientes/id/{id}` | Elimina un cliente | [http://localhost:3001/clientes/id/1](http://localhost:3001/clientes/id/1) |

### 📦 Productos

| Método | Ruta | Descripción | Link |
|--------|------|-------------|------|
| `GET` | `/productos` | Obtiene todos los productos | [http://localhost:3001/productos](http://localhost:3001/productos) |
| `GET` | `/productos/nombre/{nombre}` | Busca productos por nombre | [http://localhost:3001/productos/nombre/Teclado](http://localhost:3001/productos/nombre/Teclado) |
| `GET` | `/productos/id/{id}` | Obtiene un producto por ID | [http://localhost:3001/productos/id/2](http://localhost:3001/productos/id/2) |
| `POST` | `/productos` | Crea un nuevo producto | [http://localhost:3001/productos](http://localhost:3001/productos) |
| `PUT` | `/productos/id/{id}` | Actualiza un producto existente | [http://localhost:3001/productos/id/2](http://localhost:3001/productos/id/2) |
| `DELETE` | `/productos/id/{id}` | Elimina un producto | [http://localhost:3001/productos/id/2](http://localhost:3001/productos/id/2) |

### 🔄 Relaciones Cliente-Producto

| Método | Ruta | Descripción | Link |
|--------|------|-------------|------|
| `GET` | `/cliente-producto/historial` | Obtiene todo el historial de relaciones | [http://localhost:3001/cliente-producto/historial](http://localhost:3001/cliente-producto/historial) |
| `GET` | `/cliente-producto/cliente/{id_cliente}` | Obtiene productos de un cliente | [http://localhost:3001/cliente-producto/cliente/1](http://localhost:3001/cliente-producto/cliente/1) |
| `GET` | `/cliente-producto/producto/{id_producto}` | Obtiene clientes con un producto | [http://localhost:3001/cliente-producto/producto/2](http://localhost:3001/cliente-producto/producto/2) |
| `POST` | `/cliente-producto/asignar` | Asigna un producto a un cliente | [http://localhost:3001/cliente-producto/asignar](http://localhost:3001/cliente-producto/asignar) |
| `DELETE` | `/cliente-producto/eliminar` | Elimina una relación cliente-producto | [http://localhost:3001/cliente-producto/eliminar](http://localhost:3001/cliente-producto/eliminar) |
