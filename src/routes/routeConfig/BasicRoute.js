import React from "react";
import { Route } from "react-router-dom"
import Home from "../Home";
import Login from "../Login";
import AllMovies from "../AllMovies";
import Discount from "../Discount";
import PrivateCinema from "../PrivateCinema";

export default [
  <Route component={Login} exact path='/login' />,
  <Route component={AllMovies} exact path='/allmovies' />,
  <Route component={Discount} exact path='/discount' />,
  <Route component={PrivateCinema} exact path='/privateCinema' />,
  <Route component={Home}  path='/' />
];

