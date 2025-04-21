


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


