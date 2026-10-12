const pool = require("./utils/dbconnection");

// REQ. 3: Creamos una funcion asincrona para obtener los posts de la base de datos
const obtenerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

// REQ. 4: Creamos una funcion asincrona para agregar un post a la base de datos
const agregarPost = async (titulo, img, descripcion) => {
  // Inicialiazamos los nuevos posts con 0 likes por defecto.
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES($1, $2, $3, 0)";
  const valores = [titulo, img, descripcion];

  const result = await pool.query(consulta, valores);
  return result;
};

module.exports = { obtenerPosts, agregarPost };
