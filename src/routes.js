import React from "react"
import { Switch, Route } from "react-router-dom";
import Bracket from "./Components/Bracket";
import Login from "./Components/Login"
import Home from "./Components/Home"
import CreateTournament from "./Components/CreateTournament"
import  UpdateTournament  from "./Components/UpdateTournament";






export default (
  
  <Switch>
    <Route component={Bracket} exact path="/tournament/:id" />
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
    <Route component={CreateTournament} path="/create" />
    <Route component={UpdateTournament} path="/update/:id" />
  </Switch>

);
