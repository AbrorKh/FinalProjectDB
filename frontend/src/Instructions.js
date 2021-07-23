import React, { Fragment, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import img from "./img.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
function Instructions() {
  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="my-5">Instructions</h1>
        <p>
          At the top of the page you will see the input form and <b>Query</b>{" "}
          button. Before typing your input and pressing on <b>Query</b> button,
          please select the type of the query from the buttons below the form.
        </p>
        <img
          src={img}
          alt="screenshot"
          style={{
            width: "auto",
            height: "200px",
            border: "10px solid #FFF",
          }}
        />
        <br />
        <br />
        <p>
          When you press on your preferred selection from 8 options, you will
          see that <b>Query type selected</b> field will change to your
          preferred query type.
        </p>
        <img
          src={img1}
          alt="screenshot"
          style={{
            width: "auto",
            height: "75px",
            border: "10px solid #FFF",
          }}
        />
        <br />
        <br />
        After selecting your query type, you can start typing in associated
        entity, for instance for query type <b>Query by year</b> and year 2008,
        the result will be as follows.
        <br />
        <br />
        <img
          src={img2}
          alt="screenshot"
          style={{
            width: "auto",
            height: "500px",
            border: "10px solid #FFF",
          }}
        />
        <br />
        <br />
        <div>
          <Link to="/app">
            <button className="btn btn-primary">Go to Movies 'R' Us 🎞️</button>
          </Link>
          <span>&nbsp;&nbsp;</span>
          <Link to="/">
            <button className="btn btn-success">Home 🏠</button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </Fragment>
  );
}

export default Instructions;
