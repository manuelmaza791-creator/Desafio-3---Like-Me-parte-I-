const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Master.$30",
  database: "likeme",
  allowExitOnIdle: true,
});

module.exports = pool;
