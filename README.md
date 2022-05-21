# facturacion-backend

Este repositorio contiene la solución a la prueba técnica que describe el backend del siguiente problema:

>“Una empresa vende productos a varios clientes. Se necesitan conocer los datos personales de los clientes (Nombre, Apellido, DNI, Dirección y Fecha de Nacimiento). Cada producto tiene un nombre y código, así como un precio unitario. Un cliente puede comprar varios productos a la empresa y un mismo producto puede ser comprado por varios clientes en diferentes periodos de tiempo.
Los productos son suministrados por diferentes proveedores. Se debe tener en cuenta que un producto sólo puede ser suministrado por un proveedor, y que un proveedor puede suministrar varios productos. De cada proveedor se desea obtener el NIF, Nombre y Dirección”.
24. De acuerdo con el MER definido en el punto anterior, realice un Query en donde extraiga los siguientes datos:
a. El nombre y apellido de todos los clientes que compraron productos para el mes de agosto de 2014 y el total de la compra realizada en ese mes.

## Descripción
El presesente servidor está desarrollado en Node.js que consume una base de datos alojada en SQL Server

## Requisitos
- Node.js
- SQL Server

### Librerías
- "cors": "^2.8.5",
- "dotenv": "^16.0.1",
- "express": "^4.18.1",
-  "mssql": "^8.1.1"
