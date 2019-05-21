import React from "react";
import { Route } from "react-router-dom"
import Home from "../Users/Home";
import Login from "../Login";
import AllMovies from "../Users/AllMovies";
import Discount from "../Users/Discount";
import PrivateCinema from "../Users/PrivateCinema";
import Manage from "../Managers/Manage";
import MovieDetailsPage from "../Users/MovieDetailPage";
import MovieOrder from "../Users/MovieOrder";

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
