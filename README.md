# 📸 Like Me - Red Social (Parte I)

Esta es una API REST construida con **Node.js** y **Express.js** que se conecta a una base de datos relacional **PostgreSQL** mediante el paquete `pg`. Permite almacenar y consultar publicaciones de manera persistente, implementando políticas de seguridad como consultas parametrizadas y habilitación de CORS para la conexión con el Frontend en React.

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express.js
- **Base de Datos:** PostgreSQL
- **Control de Acceso:** CORS
- **Seguridad:** Consultas parametrizadas (Prevención de Inyección SQL)

## 🗄️ Configuración de la Base de Datos

1. Abre tu terminal de PostgreSQL (`psql`) o PgAdmin y crea la base de datos:
   ```sql
   CREATE DATABASE likeme;
   ```
2. Conéctate a la base de datos y crea la tabla `posts`:

   ```sql
   \c likeme

   CREATE TABLE posts (
       id SERIAL,
       titulo VARCHAR(25),
       img VARCHAR(1000),
       descripcion VARCHAR(255),
       likes INT
   );
   ```

## 🚀 Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para levantar el backend en tu entorno local:

1. **Clonar el repositorio o descargar el código:**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd <NOMBRE_DE_LA_CARPETA>
   ```
2. **Instalar las dependencias necesarias:**
   ```bash
   npm install
   ```
3. **Configurar las credenciales:**
   Abre el archivo `utils/dbconnection.js` y reemplaza la propiedad `password` con tu contraseña local de PostgreSQL.
4. **Iniciar el servidor:**
   ```bash
   node index.js
   ```
   _El servidor se encenderá en el puerto `3000` (`http://localhost:3000`)._

## 🛣️ Endpoints Disponibles

- **`GET /posts`**: Obtiene todas las publicaciones almacenadas de forma persistente en PostgreSQL.
- **`POST /posts`**: Recibe un payload con `titulo`, `url` y `descripcion` para registrar una nueva publicación en la base de datos con 0 likes por defecto.
