import React from "react";
import {Route} from "react-router-dom"

import Login from "../Login";

import Home from "../Users/Home";
import AllMovies from "../Users/AllMovies";
import Discount from "../Users/Discount";
import PrivateCinema from "../Users/PrivateCinema";
import MovieDetailsPage from "../Users/MovieDetailPage";
import MovieOrder from "../Users/MovieOrder";

import Manage from "../Managers/Manage";
import Arrange from "../Managers/Arrange";
import Onshelf from "../Managers/Onshelf";
import Statistic from "../Managers/Statistic";
import Movies from "../Managers/Movies";
import Halls from "../Managers/Halls";
import Activity from "../Managers/Activity";
import Member from "../Managers/Member";
import Strategy from "../Managers/Strategy";
import Personnel from "../Managers/Personnel";
import Account from "../Managers/Account";

export default [
    //登陆注册
    <Route component={Login} exact path='/login'>
        {/*<Route component={}></Route>*/}
    </Route>,
    // 经理界面
    <Route component={Manage} exact path='/manage'/>,
    <Route component={Arrange} exact path='/manage/arrange'/>,
    <Route component={Onshelf} exact path='/manage/onshelf'/>,
    <Route component={Statistic} exact path='/manage/statistics'/>,
    <Route component={Movies} exact path='/manage/movies'/>,
    <Route component={Halls} exact path='/manage/halls'/>,
    <Route component={Activity} exact path='/manage/activity'/>,
    <Route component={Member} exact path='/manage/member'/>,
    <Route component={Strategy} exact path='/manage/strategy'/>,
    <Route component={Personnel} exact path='/manage/personnel'/>,
    <Route component={Account} exact path='/manage/account'/>,
    // 用户界面
    <Route component={AllMovies} exact path='/allmovies'/>,
    <Route component={Discount} exact path='/discount'/>,
    <Route component={PrivateCinema} exact path='/privateCinema'/>,
    <Route component={MovieDetailsPage} exact path='/moviedetails/:movieId'/>,
    <Route component={MovieOrder} exact path='/movieorder/:movieId'/>,
    <Route component={Home} path='/'/>
]
;
