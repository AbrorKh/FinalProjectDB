const Pool = require("pg").Pool;

const pool = new Pool({
  user: "nauuxxlk",
  password: "dh-X9edEzv2Z4hlhh8NWOmEh3Lj-Rj7U",
  port: 5432,
  host: "chunee.db.elephantsql.com",
  database: "nauuxxlk",
});

module.exports = pool;
