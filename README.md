


👥 Rutas de clientes
📋 Obtener todos los clientes
GET
👉 http://localhost:3001/clientes

🔍 Obtener cliente por DNI
GET
👉 http://localhost:3001/clientes/{dni}
Ejemplo:
http://localhost:3001/clientes/12345678

🔍 Obtener cliente por ID
GET
👉 http://localhost:3001/clientes/id/{id}
Ejemplo:
http://localhost:3001/clientes/id/1

➕ Crear nuevo cliente
POST
👉 http://localhost:3001/clientes
Body JSON:
{
  "dni": "12345678",
  "nombre": "Juan",
  "apepaternos": "Pérez",
  "apematernos": "Gómez",
  "fechanacimiento": "2000-01-01"
}






//CREAR (POST) CON DNI
http://localhost:3001/clientes/

📦 Rutas para productos
✅ Obtener todos los productos
GET
👉 http://localhost:3001/productos

🔍 Obtener producto por nombre
GET
👉 http://localhost:3001/productos/nombre/{nombre}
Ejemplo:
http://localhost:3001/productos/nombre/Mouse

🔍 Obtener producto por ID
GET
👉 http://localhost:3001/productos/id/{id}
Ejemplo:
http://localhost:3001/productos/id/2

➕ Crear un nuevo producto
POST
👉 http://localhost:3001/productos
{
  "nombre": "Teclado Gaming",
  "descripcion": "RGB, mecánico",
  "precio": 180.00
}


🔁 Rutas de historial cliente-producto
📜 Ver historial completo de relaciones cliente-producto
GET
👉 http://localhost:3001/cliente-producto/historial

📦 Ver productos asignados a un cliente
GET
👉 http://localhost:3001/cliente-producto/cliente/{id_cliente}
Ejemplo:
http://localhost:3001/cliente-producto/cliente/1

👤 Ver clientes que tienen un producto
GET
👉 http://localhost:3001/cliente-producto/producto/{id_producto}
Ejemplo:
http://localhost:3001/cliente-producto/producto/2

➕ Asignar producto a cliente (crear relación)
POST
👉 http://localhost:3001/cliente-producto/asignar
En el body JSON debes enviar:
{
  "id_cliente": 1,
  "id_producto": 2
}


DROP TABLE clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY NOT NULL,
    dni VARCHAR(8),
    nombre VARCHAR(80),
    apepaternos VARCHAR(80),
    apematernos VARCHAR(80),
    fechanacimiento DATE
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10,2)
);

CREATE TABLE cliente_producto (
    id_cliente INTEGER REFERENCES clientes(id) ON DELETE CASCADE,
    id_producto INTEGER REFERENCES productos(id) ON DELETE CASCADE,
    PRIMARY KEY (id_cliente, id_producto)
);


INSERT INTO clientes (dni, nombre, apepaternos, apematernos, fechanacimiento)
VALUES
('12345678', 'Juan Pérez', 'Pérez', 'Gómez', '1990-05-15'),
('23456789', 'Ana López', 'López', 'Martínez', '1985-08-22'),
('34567890', 'Carlos Ruiz', 'Ruiz', 'Fernández', '2000-11-30');

INSERT INTO productos (nombre, descripcion, precio)
VALUES
('Laptop Dell', 'Laptop de 15 pulgadas, procesador i7, 8GB RAM', 1200.50),
('Móvil Samsung', 'Smartphone Galaxy S21, 128GB', 799.99),
('Teclado Logitech', 'Teclado mecánico con retroiluminación', 99.99),
('Monitor LG', 'Monitor 27 pulgadas, 144Hz', 349.75);

INSERT INTO cliente_producto (id_cliente, id_producto)
VALUES
(1, 1),  -- Juan Pérez tiene la Laptop Dell
(1, 2),  -- Juan Pérez tiene el Móvil Samsung
(2, 3),  -- Ana López tiene el Teclado Logitech
(3, 4);  -- Carlos Ruiz tiene el Monitor LG


SELECT * FROM clientes
SELECT * FROM cliente_producto
SELECT * FROM productos



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





