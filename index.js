const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Bienvenida
app.get('/', async (req, res) => {
  try {
    res.send("Bienvenido " + (req.params.name ?? "Andres Olarte"));
  } catch (err) {
    res.status(500).send(err);
  }
});

const users = require('./models/users');
const url = 'mongodb://localhost:27017/mydb';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.log('Error al conectar a la base de datos: ' + err));

// Crear una usuario
app.post('/users', async (req, res) => {
  const user = new users(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtener usuario por id
app.get('/users:id', async (req, res) => {
  try {
    const user = await users.find(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtener todas los usuarios
app.get('/users', async (req, res) => {
  try {
    const user_list = await users.find({});
    res.send(user_list);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Actualizar una usuario
app.patch('/users/:id', async (req, res) => {
  try {
    await users.findByIdAndUpdate(req.params.id, req.body);
    await users.save();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Eliminar una usuario
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await users.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).send('Usuario no encontrada');
    }

    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
