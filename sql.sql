
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY NOT NULL,
    dni VARCHAR(8) UNIQUE,
    nombre VARCHAR(80) NOT NULL,
    apepaternos VARCHAR(80) NOT NULL,
    apematernos VARCHAR(80),
    fechanacimiento DATE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


sql
CREATE TABLE productos (
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
    stock INTEGER DEFAULT 0 CHECK (stock >= 0),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cliente_producto (
    id_cliente INTEGER REFERENCES clientes(id) ON DELETE CASCADE,
    id_producto INTEGER REFERENCES productos(id) ON DELETE CASCADE,
    asignado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cantidad INTEGER DEFAULT 1 CHECK (cantidad > 0),
    PRIMARY KEY (id_cliente, id_producto)
);

INSERT INTO clientes (dni, nombre, apepaternos, apematernos, fechanacimiento) VALUES
('12345678', 'Juan Pérez', 'Pérez', 'Gómez', '1990-05-15'),
('23456789', 'Ana López', 'López', 'Martínez', '1985-08-22'),
('34567890', 'Carlos Ruiz', 'Ruiz', 'Fernández', '2000-11-30');
🛍️ Productos de prueba
sql
INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
('Laptop Dell', 'Laptop de 15 pulgadas, i7, 8GB RAM', 1200.50, 10),
('Móvil Samsung', 'Smartphone Galaxy S21, 128GB', 799.99, 15),
('Teclado Logitech', 'Teclado mecánico retroiluminado', 99.99, 20),
('Monitor LG', 'Monitor 27", 144Hz', 349.75, 8);
🔗 Relaciones de prueba
sql
INSERT INTO cliente_producto (id_cliente, id_producto, cantidad) VALUES
(1, 1, 1),  -- Juan Pérez compró 1 Laptop Dell
(1, 2, 2),  -- Juan Pérez compró 2 Móviles Samsung
(2, 3, 1),  -- Ana López compró 1 Teclado Logitech
(3, 4, 1);  -- Carlos Ruiz compró 1 Monitor LG
🔍 Consulta de Ejemplo
Ver relaciones cliente-producto con detalles:
sql
SELECT
    c.id AS cliente_id,
    c.nombre || ' ' || c.apepaternos AS cliente,
    p.id AS producto_id,
    p.nombre AS producto,
    cp.cantidad,
    p.precio,
    (cp.cantidad * p.precio) AS total
FROM
    cliente_producto cp
JOIN
    clientes c ON cp.id_cliente = c.id
JOIN
    productos p ON cp.id_producto = p.id
ORDER BY
    c.nombre, p.nombre;
Resultado esperado:

cliente_id |     cliente     | producto_id |     producto      | cantidad | precio  |  total
-----------+-----------------+-------------+-------------------+----------+---------+---------
     1     | Juan Pérez      |      1      | Laptop Dell       |    1     | 1200.50 | 1200.50
     1     | Juan Pérez      |      2      | Móvil Samsung     |    2     | 799.99  | 1599.98
     2     | Ana López       |      3      | Teclado Logitech  |    1     | 99.99   |  99.99
     3     | Carlos Ruiz     |      4      | Monitor LG        |    1     | 349.75  | 349.75