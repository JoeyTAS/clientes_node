API de Gestión de Clientes y Productos
Este proyecto permite gestionar clientes, productos y las relaciones entre ellos. A continuación se detallan las rutas de la API para interactuar con los recursos.

🧑‍🤝‍🧑 Rutas de Clientes
Obtener todos los clientes
Método: GET
Ruta: /clientes
Descripción: Devuelve una lista con todos los clientes registrados.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/clientes
Obtener cliente por DNI
Método: GET
Ruta: /clientes/{dni}
Descripción: Devuelve un cliente específico basado en su DNI.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/clientes/12345678
Obtener cliente por ID
Método: GET
Ruta: /clientes/id/{id}
Descripción: Devuelve un cliente específico basado en su ID.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/clientes/id/1
Crear un nuevo cliente
Método: POST
Ruta: /clientes
Descripción: Crea un nuevo cliente.
Body JSON de ejemplo:

json
Copiar
Editar
{
  "dni": "12345678",
  "nombre": "Juan",
  "apepaternos": "Pérez",
  "apematernos": "Gómez",
  "fechanacimiento": "2000-01-01"
}
📦 Rutas de Productos
Obtener todos los productos
Método: GET
Ruta: /productos
Descripción: Devuelve una lista con todos los productos disponibles.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/productos
Obtener producto por nombre
Método: GET
Ruta: /productos/nombre/{nombre}
Descripción: Devuelve un producto específico basado en su nombre.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/productos/nombre/Mouse
Obtener producto por ID
Método: GET
Ruta: /productos/id/{id}
Descripción: Devuelve un producto específico basado en su ID.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/productos/id/2
Crear un nuevo producto
Método: POST
Ruta: /productos
Descripción: Crea un nuevo producto.
Body JSON de ejemplo:

json
Copiar
Editar
{
  "nombre": "Teclado Gaming",
  "descripcion": "RGB, mecánico",
  "precio": 180.00
}
🔄 Rutas de Historial Cliente-Producto
Ver historial completo de relaciones cliente-producto
Método: GET
Ruta: /cliente-producto/historial
Descripción: Devuelve un historial completo de todas las relaciones entre clientes y productos.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/cliente-producto/historial
Ver productos asignados a un cliente
Método: GET
Ruta: /cliente-producto/cliente/{id_cliente}
Descripción: Devuelve todos los productos asignados a un cliente específico.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/cliente-producto/cliente/1
Ver clientes que tienen un producto
Método: GET
Ruta: /cliente-producto/producto/{id_producto}
Descripción: Devuelve todos los clientes que tienen un producto específico.
Ejemplo de solicitud:

bash
Copiar
Editar
GET http://localhost:3001/cliente-producto/producto/2
Asignar un producto a un cliente
Método: POST
Ruta: /cliente-producto/asignar
Descripción: Crea una relación entre un cliente y un producto.
Body JSON de ejemplo:

json
Copiar
Editar
{
  "id_cliente": 1,
  "id_producto": 2
}
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
