import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [queryType, setQueryType] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const moviesByTitle = await fetch(
        `http://localhost:5000/movies/?title=${title}`
      );

      const parseResp = await moviesByTitle.json();
      console.log(parseResp);
      setMovies(parseResp);
    } catch (e) {
      console.error(e.message);
    }
  };

  const setQuery = (query) => {
    switch (query) {
      case "title":
        setQueryType("title");
        break;
      case "genre":
        setQueryType("genre");
        break;
      case "year":
        setQueryType("year");
        break;
      case "rating":
        setQueryType("rating");
        break;
      default:
        break;
    }
    console.log(queryType);
  };
  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="my-5">1000 Movies from IMDB</h1>
        <form onSubmit={onSubmitForm} className="d-flex">
          <input
            type="text"
            name="title"
            placeholder="Enter title ... "
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <span>&nbsp;&nbsp;</span>
          <button className="btn btn-primary">Query</button>
        </form>
        <br />
        <div className="d-flex">
          <button className="btn btn-success" onClick={() => setQuery("title")}>
            Query by Movie Name
          </button>
          <span>&nbsp;&nbsp;</span>
          <button
            className="btn btn-secondary"
            onClick={() => setQuery("genre")}
          >
            Query by Genre
          </button>
          <span>&nbsp;&nbsp;</span>
          <button className="btn btn-light" onClick={() => setQuery("actors")}>
            Query by Actors
          </button>
          <span>&nbsp;&nbsp;</span>
          <button
            className="btn btn-warning"
            onClick={() => setQuery("rating")}
          >
            Query by IMDB Rating
          </button>
          <span>&nbsp;&nbsp;</span>
          <button className="btn btn-info" onClick={() => setQuery("year")}>
            Query by Year
          </button>
          <span>&nbsp;&nbsp;</span>

          <button className="btn btn-danger" onClick={() => setQuery("votes")}>
            Query by Votes
          </button>
          <span>&nbsp;&nbsp;</span>
          <button
            className="btn btn-dark"
            onClick={() => setQuery("metascore")}
          >
            Query by Metascore
          </button>
          <span>&nbsp;&nbsp;</span>
          <button
            className="btn"
            style={{ backgroundColor: "purple-600", color: "white" }}
            onClick={() => setQuery("runtime")}
          >
            Query by Runtime
          </button>
          <span>&nbsp;&nbsp;</span>
        </div>
        <table className="table my-5">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Description</th>
              <th>Genre</th>
              <th>Actors</th>
              <th>IMDB Rating</th>
              <th>Release Year</th>
              <th>Votes</th>
              <th>Metascore</th>
              <th>Runtime</th>
              <th>Watch</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.description}</td>
                <td>{movie.genre}</td>
                <td>{movie.actors}</td>
                <td>{movie.rating}</td>
                <td>{movie.year}</td>
                <td>{movie.votes}</td>
                <td>{movie.metascore}</td>
                <td>{movie.runtime}</td>

                <td>
                  <a
                    style={{ textDecoration: "none" }}
                    target="#"
                    href={`https://www.google.com/search?q=watch+${movie.title}`}
                  >
                    🔍
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default App;
