const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());

app.get("/movies", async (req, res) => {
  try {
    // query by name
    const { title } = req.query;
    const movies = await pool.query(
      "SELECT * FROM MOVIES WHERE Title ILIKE $1",
      [`%${title}%`]
    );
    res.json(movies.rows);
  } catch (e) {
    console.error(e.message);
  }
});

app.listen(5000, () => {
  console.log("Started on port 5000...");
});
