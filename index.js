const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('./config/mongodb');
mongodb.connect(process.env);

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

let userRoutes = require("./routes/users.routes");
app.use("/users", userRoutes);

app.get('/', async (req, res) => {
  try {
    res.send(`Bienvenido al servicio de ${process.env.OWNER}`);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(process.env.PORT, function () {
  console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`);
});
