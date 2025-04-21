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
🗄️ Estructura de la Base de Datos
Tabla clientes
sql
Copiar
Editar
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY NOT NULL,
    dni VARCHAR(8),
    nombre VARCHAR(80),
    apepaternos VARCHAR(80),
    apematernos VARCHAR(80),
    fechanacimiento DATE
);
Tabla productos
sql
Copiar
Editar
CREATE TABLE productos (
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10,2)
);
Tabla cliente_producto (relación muchos a muchos)
sql
Copiar
Editar
CREATE TABLE cliente_producto (
    id_cliente INTEGER REFERENCES clientes(id) ON DELETE CASCADE,
    id_producto INTEGER REFERENCES productos(id) ON DELETE CASCADE,
    PRIMARY KEY (id_cliente, id_producto)
);
📝 Ejemplos de Datos de Prueba
Insertar clientes
sql
Copiar
Editar
INSERT INTO clientes (dni, nombre, apepaternos, apematernos, fechanacimiento)
VALUES
('12345678', 'Juan Pérez', 'Pérez', 'Gómez', '1990-05-15'),
('23456789', 'Ana López', 'López', 'Martínez', '1985-08-22'),
('34567890', 'Carlos Ruiz', 'Ruiz', 'Fernández', '2000-11-30');
Insertar productos
sql
Copiar
Editar
INSERT INTO productos (nombre, descripcion, precio)
VALUES
('Laptop Dell', 'Laptop de 15 pulgadas, procesador i7, 8GB RAM', 1200.50),
('Móvil Samsung', 'Smartphone Galaxy S21, 128GB', 799.99),
('Teclado Logitech', 'Teclado mecánico con retroiluminación', 99.99),
('Monitor LG', 'Monitor 27 pulgadas, 144Hz', 349.75);
Insertar relaciones cliente-producto
sql
Copiar
Editar
INSERT INTO cliente_producto (id_cliente, id_producto)
VALUES
(1, 1),  -- Juan Pérez tiene la Laptop Dell
(1, 2),  -- Juan Pérez tiene el Móvil Samsung
(2, 3),  -- Ana López tiene el Teclado Logitech
(3, 4);  -- Carlos Ruiz tiene el Monitor LG
Consultas de ejemplo:
Ver todos los clientes:

sql
Copiar
Editar
SELECT * FROM clientes;
Ver todas las relaciones cliente-producto:

sql
Copiar
Editar
SELECT * FROM cliente_producto;
Ver todos los productos:

sql
Copiar
Editar
SELECT * FROM productos;
Ver información completa de clientes y productos relacionados:

sql
Copiar
Editar
SELECT 
    c.id AS id_cliente,
    c.nombre AS nombre_cliente,
    p.id AS id_producto,
    p.nombre AS nombre_producto,
    p.precio AS precio_producto
FROM 
    cliente_producto cp
JOIN 
    clientes c ON cp.id_cliente = c.id
JOIN 
    productos p ON cp.id_producto = p.id;
