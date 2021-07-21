const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "admin",
  port: 5432,
  host: "localhost",
  database: "movie_db",
});

module.exports = pool;
