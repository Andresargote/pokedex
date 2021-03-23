import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";

export default function AppRouter(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pokemon/:number" component={Pokemon} />
            </Switch>
        </Router>
    )
}