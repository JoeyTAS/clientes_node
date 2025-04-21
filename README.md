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

🗃️ Estructura de la Base de Datos
📌 Tablas Principales
👥 Tabla clientes
sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY NOT NULL,
    dni VARCHAR(8) UNIQUE,
    nombre VARCHAR(80) NOT NULL,
    apepaternos VARCHAR(80) NOT NULL,
    apematernos VARCHAR(80),
    fechanacimiento DATE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Campos:

id: Identificador único autoincremental (PK)

dni: Documento Nacional de Identidad (único)

nombre: Nombre del cliente

apepaternos: Apellido paterno

apematernos: Apellido materno

fechanacimiento: Fecha de nacimiento

creado_en: Fecha de creación (automática)

🛍️ Tabla productos
sql
CREATE TABLE productos (
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
    stock INTEGER DEFAULT 0 CHECK (stock >= 0),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Campos:

id: Identificador único autoincremental (PK)

nombre: Nombre del producto

descripcion: Descripción detallada

precio: Precio unitario (mayor que 0)

stock: Cantidad disponible (default 0)

creado_en: Fecha de creación (automática)

🔗 Tabla cliente_producto (Relación muchos-a-muchos)
sql
CREATE TABLE cliente_producto (
    id_cliente INTEGER REFERENCES clientes(id) ON DELETE CASCADE,
    id_producto INTEGER REFERENCES productos(id) ON DELETE CASCADE,
    asignado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cantidad INTEGER DEFAULT 1 CHECK (cantidad > 0),
    PRIMARY KEY (id_cliente, id_producto)
);
Relaciones:

id_cliente: FK a tabla clientes (eliminación en cascada)

id_producto: FK a tabla productos (eliminación en cascada)

Clave primaria compuesta por ambas FK

📊 Datos de Ejemplo
👥 Clientes de prueba
sql
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
