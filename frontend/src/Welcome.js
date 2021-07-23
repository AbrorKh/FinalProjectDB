import React, { Fragment } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import img from "./logo_size.jpg";
import img1 from "./logo_size_invert.jpg";
function Welcome() {
  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="my-5">Welcome to Movies 'R' Us</h1>
        <img src={img} alt="logo" style={{ borderRadius: "30px" }} />
        <br />
        <br />
        <p>
          <h2>Final Project for COP4710 Database Design</h2>
          <h3>Team Members: Abror Khaytbaev, Jesse Gonzales, Lavaugh Brown</h3>
          <br /> Our goal for this project is to implement an online movie
          querying system. This system will allow users to view an online
          collection of movies from IMDB database and their associated metadata
          (relations). This system will present users with a collection of
          movies and the possibility to identify their next movie to watch by 8
          types of queries from the metadata available. Initially, we would
          suggest navigating to instructions page to get familiar with the
          system and how to use it most effectively.
        </p>
        <div>
          <Link to="/app">
            <button className="btn btn-primary">Go to Movies 'R' Us 🎞️</button>
          </Link>
          <span>&nbsp;&nbsp;</span>
          <Link to="/instructions">
            <button className="btn btn-success">Instructions ℹ</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Welcome;
