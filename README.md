## Requisitos

- Node.js (versión 14.x o superior)
- PostgreSQL (versión 13.x o superior)
- NPM o Yarn

## Instalación

### Backend

1. **Configurar PostgreSQL:**
   - Asegúrate de tener PostgreSQL instalado y funcionando en tu máquina local.
   - Crea una base de datos llamada `lego_ecommerce`.

2. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/lego-ecommerce.git
    cd lego-ecommerce/backend
    ```

3. **Instalar dependencias:**

    ```bash
    npm install
    ```

4. **Configurar variables de entorno:**
   - Crea un archivo `.env` en la carpeta `backend/` con el siguiente contenido:

    ```plaintext
    DB_URI=postgres://usuario:contraseña@localhost:5432/lego_ecommerce
    PORT=5000
    ```

   - Reemplaza `usuario` y `contraseña` con tus credenciales de PostgreSQL.

5. **Crear tablas en la base de datos:**

    ```bash
    npx sequelize-cli db:migrate
    ```

6. **Iniciar el servidor:**

    ```bash
    npm start
    ```

   El backend debería estar corriendo en `http://localhost:5000`.