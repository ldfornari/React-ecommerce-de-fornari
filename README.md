# Tienda virtual creada durante la cursada de React.

Simulador de un Ecommerce de productos electrónicos.



## La navegación incluye:

•   Home con productos
•   Pantalla de producto con detalle
•   Pantalla por categorías
•   Pantalla del carrito



## Herramientas utilizadas:

•   Interfaz realizada con ReactJS - Create React App
•   React Spinners
•   Ruteo con React Router Dom
•   Estilos con SASS - CSS 
•   Base de datos Firebase


## Links:

La aplicación se puede visualizar en:  

https://github.com/ldfornari/React-ecommerce-de-fornari

https://react-ecommerce-de-fornari.netlify.app


## Instalación:

Después de copiar el repositorio, ejecutar "npm install" para instalar las dependencias.
Luego ejecute "npm start" en la terminal de su proyecto para iniciarlo en el navegador.



## Detalles del proyecto:

El usuario puede visualizar los productos en la pantalla principal, puede acceder desde cada producto al detalle y agregarlo al carrito desde el mismo detalle.
En la barra de navegación, tiene acceso dinámico al login, registro y logout, y muestra el correo electrónico autenticado por la base de datos, también en el ítem carrito se muestra la cantidad de productos que el usuario ha agregado. y permite filtrar los productos por las distintas categorías.
El carrito muestra los productos y las cantidades elegidas, y permite eliminar cada producto independiente o vaciar el carrito. Si el usuario no está logueado antes de terminar la compra, lo hace ir al login y una vez que se loguea, le permite terminar la compra. 
Una vez realizada la compra se le entrega al usuario un número (id) de pedido.