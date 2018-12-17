import React, { Component } from 'react';
import Home from '@Pages/home'
import Shixi from '@Pages/shixi'
import Xiaozhao from '@Pages/xiaozhao'
import User from '@Pages/user'
import Details from '@Pages/details'
import Setting from '@Pages/user/setting'
import Message from '@Pages/user/message'
import NavBottom from '@Pages/nav'
import FastLogin from '@Pages/login/fastLogin'
import Login from '@Pages/login/login'
import Loginin from '@Pages/login/loginin'
// import Demo from '@Pages/demo'
import { Route, Switch, Redirect } from 'react-router-dom'

import { ActiveNavLink } from "@C/commons/router";
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
              <Route path="/setting" component={Setting}/>
              <Route path="/message" component={Message}/>
              <Route path="/user" component={User}/>
              <Route path="/fastLogin" component={FastLogin}/>
              <Route path="/login" component={Login}/>
              <Route path="/loginin" component={Loginin}/>
              <Route path="/details" component={Details}/>
              {/*<Route path="/Demo" component={Demo}/>*/}
              {/*<Route path="/language" component={xiaozhao}/>*/}
              {/*<Route path="/about" component={user}/>*/}
              <Route path="*" component={Home}/>
          </Switch>
          <NavBottom/>
      </div>
    );
  }
}
export default App;
