const model = require('../models/users.model');

// Crear una usuario
module.exports.post = async (req, res) => {
  try {
    const user = new model(req.body);
    user.created_date = new Date();
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtener usuario por id
module.exports.getById = async (req, res) => {
  try {
    const user = await model.findOne({ _id: req.params.id });
    if (!user) {
      res.status(404).send('Usuario no encontrado.');
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtener todos los usuarios
module.exports.get = async (req, res) => {
  try {
    const user_list = await model.find({});
    if (!user_list) {
      res.status(404).send('Usuario no encontrado.');
    }
    res.send(user_list);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Actualizar una usuario
module.exports.patch = async (req, res) => {
  try {
    await model.findByIdAndUpdate(req.params.id, { name: req.body.name, mail: req.body.mail, modified_date: new Date() });
    await model.save();
    res.send(model);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Eliminar una usuario
module.exports.delete = async (req, res) => {
  try {
    const user = await model.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send('Usuario no encontrado.');
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};