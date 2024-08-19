const express = require('express');
const { getProducts, getProductById } = require('../controllers/archivoController');
const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// TODO: Agregar rutas para crear, actualizar y eliminar productos.

module.exports = router;