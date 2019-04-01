import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {DefaultLayout} from "../layout/DefaultLayout";
import Home from "./home/index";

export default function () {
  return (
      <BrowserRouter>
        <Switch>
          <DefaultLayout component={Home} exact path='/' />
        </Switch>
      </BrowserRouter>
  );
};

