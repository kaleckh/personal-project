import React from "react"
import { Switch, Route } from "react-router-dom";
import Bracket from "./Components/Bracket";
import Login from "./Components/Login"
import Home from "./Components/Home"
import CreateTournament from "./Components/CreateTournament"






export default (
  
  <Switch>
    <Route component={Bracket} exact path="/tournament/:id" />
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
    <Route component={CreateTournament} path="/create" />
  </Switch>

);
