let router = require("express").Router();
const controller = require("../controllers/users.controller");

// Crear una usuario
router.post('/', controller.post);

// Obtener usuario por id
router.get('/:id', controller.getById);

// Obtener todos los usuarios
router.get('/', controller.get);

// Actualizar una usuario
router.patch('/:id', controller.patch);

// Eliminar una usuario
router.delete('/:id', controller.delete);

module.exports = router;