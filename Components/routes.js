import React from "react"
import { Switch, Route } from "react-router-dom";
import Bracket from "./Bracket";
import Login from "./Login"
import Home from "./Home"
import CreateTournament from "./CreateTournament"






export default (
  
  <Switch>
    <Route component={Bracket} exact path="/tournament/:id" />
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
    <Route component={CreateTournament} path="/create" />
  </Switch>

);
