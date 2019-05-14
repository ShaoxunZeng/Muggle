import React from "react";
import { Route } from "react-router-dom"
import Home from "../Home";
import Login from "../Login";
import AllMovies from "../AllMovies";
import Discount from "../Discount";
import PrivateCinema from "../PrivateCinema";
import Manage from "../Manage";
import MovieDetailsPage from "../MovieDetailPage";
import MovieOrder from "../MovieOrder";

export default [
  <Route component={Login} exact path='/login' />,
  <Route component={AllMovies} exact path='/allmovies' />,
  <Route component={Discount} exact path='/discount' />,
  <Route component={PrivateCinema} exact path='/privateCinema' />,
  <Route component={Manage} exact path='/manage' />,
  <Route component={MovieDetailsPage} exact path='/moviedetails/:movieId' />,
  <Route component={MovieOrder} exact path='/movieorder/:movieId' />,
  <Route component={Home}  path='/' />
];
