const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/ejemploRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de productos
app.use('/api/products', productRoutes);

// TODO: Implementar rutas adicionales según las necesidades del proyecto, como usuarios y transacciones.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});