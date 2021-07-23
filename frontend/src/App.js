import React, { Fragment } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Instructions from "./Instructions";
import Welcome from "./Welcome";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/app" render={(props) => <Home {...props} />} />
            <Route
              exact           
              path="/"
              render={(props) => <Welcome {...props} />}
            />
            <Route
              exact
              path="/instructions"
              render={(props) => <Instructions {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
