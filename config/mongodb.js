const mongoose = require('mongoose');

module.exports.connect = (env) => {
  mongoose.connect(env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch((err) => console.log('Error al conectar a la base de datos: ' + err));
};
