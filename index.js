const express = require("express");
// REQ. 1: Importamos el paquete cors para permitir el acceso a la API desde cualquier origen (permitir solicitudes externas o de otros dominios)
const cors = require("cors");

// Importamos las funciones obtenerPosts y agregarPost desde el archivo consultas.js
const { obtenerPosts, agregarPost } = require("./consultas");

const app = express();
// const PORT = 3000;

// REQ. 1: Habilitamos el middleware de CORS en el servidor para permitir solicitudes desde cualquier origen
app.use(cors());

// Habilitamos el middleware para entender payloads en JSON del body de las solicitudes HTTP. Esto permite que el servidor pueda recibir y procesar datos en formato JSON enviados desde el cliente.
app.use(express.json());

app.listen(3000, () => {
  console.log("💻 Servidor encendido con éxito en http://localhost:3000");
});

// REQ. 3: Creamos un endpoint GET para obtener los posts de la base de datos
app.get("/posts", async (req, res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send("Error al obtener los posts");
  }
});

// REQ. 4: Creamos un endpoint POST para agregar un nuevo post a la base de datos
app.post("/posts", async (req, res) => {
  try {
    // Capturamos el payload enviado desde el cliente en el body de la solicitud HTTP (desde la interfaz de React). Este payload contiene los datos del nuevo post que queremos agregar a la base de datos.
    const { titulo, url, descripcion } = req.body;

    const imgUrl = url || req.body.img; // Asignamos la URL de la imagen a la variable imgUrl y si no se proporciona, usamos el valor de req.body.img como respaldo.

    // Llamamos a la función agregarPost para insertar el nuevo post en la base de datos. Esta función es asincrónica, por lo que usamos await para esperar a que se complete antes de continuar.
    await agregarPost(titulo, imgUrl, descripcion);
    res.status(201).send("Post agregado exitosamente"); // Enviamos una respuesta con el código de estado 201 (Created) indicando que el post se agregó correctamente.
  } catch (error) {
    res.status(500).send("Error al agregar el post"); // En caso de error, enviamos una respuesta con el código de estado 500 (Internal Server Error) indicando que hubo un problema al agregar el post.
  }
});
