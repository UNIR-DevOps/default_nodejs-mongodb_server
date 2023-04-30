# Configuración de un servidor Node.js con conexión a MongoDB

Este documento proporciona instrucciones sobre cómo configurar y ejecutar un servidor Node.js con una conexión a una base de datos MongoDB.

## Prerrequisitos

Antes de comenzar a configurar el servidor Node.js y MongoDB, asegúrate de tener lo siguiente instalado en tu sistema:

* Node.js: para instalar Node.js, visita el sitio oficial nodejs.org y descarga la última versión estable.
* MongoDB: para instalar MongoDB, visita el sitio oficial mongodb.com y descarga la versión adecuada para tu sistema operativo.  
* Git: para instalar Git, visita el sitio oficial git-scm.com/download/win y descarga la versión adecuada para tu sistema operativo.

## Instrucciones

Una vez que hayas instalado Node.js y MongoDB en tu sistema, sigue estos pasos para instalar los prerrequisitos de esta API:

1. Clona el repositorio de la API en tu sistema local.

    ```gitbash
    git clone https://github.com/UNIR-DevOps/default_nodejs_mongodb_server.git
    ```

2. Abre una terminal y navega hasta la carpeta donde clonaste el repositorio.

    ```bash
    cd default_nodejs_mongodb_server
    ```

3. Ejecuta el siguiente comando para instalar las dependencias de Node.js:

    ```bash
    npm install 
    ```

    Este comando instalará todas las dependencias necesarias para que la API funcione correctamente.

4. Crea un archivo llamado .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

    ```env
    MONGO_URI=mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000
    PORT=3000
    ```

    La variable MONGO_URI es la ruta de conexión a la base de datos de MongoDB. Si estás utilizando una base de datos que no está en tu máquina local, asegúrate de modificar esta ruta. La variable PORT es el puerto en el que se expondrá el servicio Node.js.

5. Ahora, estás listo para iniciar el servidor. Ejecuta el siguiente comando en la terminal:

    ```bash
    node index.js
    ```

    Esto iniciará el servidor Node.js y establecerá una conexión con la base de datos MongoDB.

6. Para probar que el servidor está funcionando correctamente, abre tu navegador web e ingresa la siguiente URL: http://localhost:3000. Esto debería mostrar un mensaje de bienvenida que indica que el servidor se está ejecutando correctamente.

7. Para probar la ruta /users, ingresa a la siguiente URL: http://localhost:3000/users. Esta ruta te permitirá acceder a la colección "users" en tu base de datos MongoDB.

## Audiencia

Este documento está dirigido a desarrolladores que buscan configurar un servidor básico con Express y MongoDB. Si eres nuevo en el desarrollo web o no estás familiarizado con estas tecnologías, te recomendamos buscar recursos adicionales para complementar esta documentación.

Para ver mas detalles vea [Postman](https://documenter.getpostman.com/view/18212046/2s93eSZv7q)