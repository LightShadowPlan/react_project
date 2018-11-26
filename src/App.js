import React, { Component, Fragment } from 'react';
import Home from '@Pages/home'
import Shixi from '@Pages/shixi'
import Xiaozhao from '@Pages/xiaozhao'
import User from '@Pages/user'
import NavBottom from '@Pages/nav'
import FastLogin from '@Pages/login/fastLogin'
import Login from '@Pages/login/login'
import Loginin from '@Pages/login/loginin'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

import { OwnLink, OwnNavLink,  ActiveNavLink} from "@C/commons/router";
import url from 'url'
import qs from 'querystring'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path="/" exact render={() => {
                  return <Redirect to="/home"/>
              }}/>
              <Route path="/home" component={Home}/>
              <Route path="/shixi" component={Shixi}/>
              <Route path="/xiaozhao" component={Xiaozhao}/>
              <Route path="/user" component={User}/>
              <Route path="/fastLogin" component={FastLogin}/>
              <Route path="/login" component={Login}/>
              <Route path="/loginin" component={Loginin}/>
              {/*<Route path="/language" component={xiaozhao}/>*/}
              {/*<Route path="/about" component={user}/>*/}
              {/*<Route path="*" component={not_found}/>*/}
          </Switch>
          <NavBottom/>
      </div>
    );
  }
}
export default App;
