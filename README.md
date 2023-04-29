# default_nodejs-mongodb_server
Servidor Express básico configurado y una conexión MongoDB establecida, podemos agregar algunas operaciones de base de datos a nuestro servidor.


## 1. Instalar las dependencias requeridas
Primer package.jsonarchivo:

```bash
npm init -y
```

A continuación, instale el

```bash
npm install express mongodb
```

## 2. Inicie el servidor

```bash
node index.js
```

## 3. Probar el servidor

Ingresa a http://localhost:3000

Para probar /users el punto final, http://localhost:3000/users. Tu users colección en tu base de datos MongoDB.
