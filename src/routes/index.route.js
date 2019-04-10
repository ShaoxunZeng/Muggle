import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {DefaultLayout} from "../layout/DefaultLayout";
import Home from "./Home";
import Login from "./Login";
import AllMovies from "./AllMovies";
import Discount from "./Discount";
import PrivateCinema from "./PrivateCinema";

export default function () {
  return (
      <BrowserRouter>
        <Switch>
          <DefaultLayout component={Home} exact path='/' />
          <DefaultLayout component={Login} exact path='/login' />
          <DefaultLayout component={AllMovies} exact path='/allmovies' />
          <DefaultLayout component={Discount} exact path='/discount' />
          <DefaultLayout component={PrivateCinema} exact path='/privateCinema' />
        </Switch>
      </BrowserRouter>
  );
};

