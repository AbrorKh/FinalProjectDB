import React, { Fragment, useState } from "react";
import {BrowserRouter, Route, Link} from "react-router";
import "./Home.css";

function Home() {
 


  return (
    <Fragment>
      <div className="container text-center">
      <li><a href="index.html">Search</a></li>
        <li><a href="sign-in.html">Sign-in/Register</a></li>
        <h1 className="my-5">The Home Page</h1>
        <p>
          Here at Movies are us we plan a to give you all the movies you could want at the prices that you love. If you register an account you'll get to rent upto 10 movies instead of the 3 allowed as a guest. 
        </p>
        <body>
          <img src="/FinalProjectDB-main/frontend/src/Images/movie.jpg" alt="Movie Picture"></img>
        </body>
      </div>
    </Fragment>
  );
}

export default Home;
