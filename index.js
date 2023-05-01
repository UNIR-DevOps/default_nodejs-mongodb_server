const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('./config/mongodb');
mongodb.connect(process.env);

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const routes = require("./routes/index.routes");
routes.load(app, process.env);

app.listen(process.env.PORT, function () {
  console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`);
});
