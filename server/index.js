const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());

app.get("/movies", async (req, res) => {
  try {
    // query by name
    const { title } = req.query;
    const { actors } = req.query;
    const { year } = req.query;
    const { runtime } = req.query;
    const { rating } = req.query;
    const { votes } = req.query;
    const { metascore } = req.query;
    const { genre } = req.query;

    console.log(req.query);
    const queryType = Object.keys(req.query)[0].toString();
    // console.log("Query Type:");
    console.log(queryType);
    switch (queryType) {
      case "title":
        const moviesByTitle = await pool.query(
          "SELECT * FROM MOVIES WHERE Title ILIKE $1",
          [`%${title}%`]
        );
        res.json(moviesByTitle.rows);
        break;
      case "genre":
        const moviesByGenre = await pool.query(
          "SELECT * FROM MOVIES WHERE Genre ILIKE $1",
          [`%${genre}%`]
        );
        res.json(moviesByGenre.rows);
        break;
      case "actors":
        const moviesByActors = await pool.query(
          "SELECT * FROM MOVIES WHERE Actors ILIKE $1",
          [`%${actors}%`]
        );
        res.json(moviesByActors.rows);
        break;
      case "rating":
        const moviesByRating = await pool.query(
          "SELECT * FROM MOVIES WHERE Rating=$1",
          [`${rating}`]
        );
        res.json(moviesByRating.rows);
        break;
      case "year":
        const moviesByYear = await pool.query(
          "SELECT * FROM MOVIES WHERE Year=$1",
          [`${year}`]
        );
        res.json(moviesByYear.rows);
        break;
      case "votes":
        const moviesByVotes = await pool.query(
          "SELECT * FROM MOVIES WHERE Votes=$1",
          [`${votes}`]
        );
        res.json(moviesByVotes.rows);
        break;
      case "metascore":
        const moviesByMetascore = await pool.query(
          "SELECT * FROM MOVIES WHERE Metascore=$1",
          [`${metascore}`]
        );
        res.json(moviesByMetascore.rows);
        break;
      case "runtime":
        const moviesByRuntime = await pool.query(
          "SELECT * FROM MOVIES WHERE Runtime=$1",
          [`${runtime}`]
        );
        res.json(moviesByRuntime.rows);
        break;
      default:
        break;
    }
    // res.json(moviesByTitle.rows);
  } catch (e) {
    console.error(e.message);
  }
});

app.listen(5000, () => {
  console.log("Started on port 5000...");
});