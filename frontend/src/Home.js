import React, { Fragment, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [actors, setActors] = useState("");
  const [rating, setRating] = useState(0.1);
  const [metascore, setMetascore] = useState(0);
  const [runtime, setRuntime] = useState(0);
  const [votes, setVotes] = useState(0);
  const [genre, setGenre] = useState("");

  const [movies, setMovies] = useState([]);
  const [queryType, setQueryType] = useState("...");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(year);
    try {
      var parseResp;
      switch (queryType) {
        case "title":
          const moviesByTitle = await fetch(
            `http://localhost:5000/movies/?title=${title}`
          );
          parseResp = await moviesByTitle.json();
          break;
        case "genre":
          const moviesByGenre = await fetch(
            `http://localhost:5000/movies/?genre=${genre}`
          );
          parseResp = await moviesByGenre.json();
          break;
        case "actors":
          const moviesByActors = await fetch(
            `http://localhost:5000/movies/?actors=${actors}`
          );
          parseResp = await moviesByActors.json();
          break;
        case "rating":
          const moviesByRating = await fetch(
            `http://localhost:5000/movies/?rating=${rating}`
          );
          parseResp = await moviesByRating.json();
          break;
        case "year":
          const moviesByYear = await fetch(
            `http://localhost:5000/movies/?year=${year}`
          );
          parseResp = await moviesByYear.json();
          break;
        case "votes":
          const moviesByVotes = await fetch(
            `http://localhost:5000/movies/?votes=${votes}`
          );
          parseResp = await moviesByVotes.json();
          break;
        case "metascore":
          const moviesByMetascore = await fetch(
            `http://localhost:5000/movies/?metascore=${metascore}`
          );
          parseResp = await moviesByMetascore.json();
          break;
        case "runtime":
          const moviesByRuntime = await fetch(
            `http://localhost:5000/movies/?runtime=${runtime}`
          );
          parseResp = await moviesByRuntime.json();
          break;
        default:
          break;
      }
      // const parseResp = await moviesByTitle.json();
      console.log("Logging parseresp: ");
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
      case "actors":
        setQueryType("actors");
        break;
      case "rating":
        setQueryType("rating");
        break;
      case "year":
        setQueryType("year");
        break;
      case "votes":
        setQueryType("votes");
        break;
      case "metascore":
        setQueryType("metascore");
        break;
      case "runtime":
        setQueryType("runtime");
        break;
      default:
        break;
    }
    console.log(queryType);
  };
  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="my-5">Movies 'R'Us</h1>
        <form onSubmit={onSubmitForm} className="d-flex">
          <input
            type="text"
            name="title"
            placeholder="Enter title ... "
            className="form-control"
            onChange={(e) => {
              switch (queryType) {
                case "title":
                  setTitle(e.target.value);
                  break;
                case "genre":
                  setGenre(e.target.value);
                  break;
                case "actors":
                  setActors(e.target.value);
                  break;
                case "rating":
                  setRating(e.target.value);
                  break;
                case "year":
                  setYear(e.target.value);
                  console.log(year);
                  break;
                case "votes":
                  setVotes(e.target.value);
                  break;
                case "metascore":
                  setMetascore(e.target.value);
                  break;
                case "runtime":
                  setRuntime(e.target.value);
                  break;
                default:
                  break;
              }
            }}
          ></input>
          <span>&nbsp;&nbsp;</span>
          <button className="btn btn-primary">Query</button>
          <span>&nbsp;&nbsp;</span>
          <Link to="/instructions">
            <button
              className="btn btn-info"
              style={{ backgroundColor: "#E1DBF3" }}
            >
              Read Instructions First ⬅️
            </button>
          </Link>
        </form>
        {/* <br /> */}
        <div className="d-flex"></div>
        <br />
        <div className="d-flex">
          <h2>Hello Shuhratjon</h2>
          <h4>Select query type:</h4>
          <span>&nbsp;&nbsp;</span>
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
            style={{ backgroundColor: "purple", color: "white" }}
            onClick={() => setQuery("runtime")}
          >
            Query by Runtime
          </button>
          <span>&nbsp;&nbsp;</span>
        </div>
        <div className="d-flex">
          <h4>Query type selected: {queryType.toUpperCase()}</h4>
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
              <th>Runtime(mins.)</th>
              <th>Where to watch</th>
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

export default Home;
