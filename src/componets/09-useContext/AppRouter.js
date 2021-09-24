import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>

        <div className="container">
          <Switch>
            <Route exact path="/login">
              <LoginScreen></LoginScreen>
            </Route>
            <Route exact path="/about">
              <AboutScreen></AboutScreen>
            </Route>
            <Route exact path="/">
              <HomeScreen></HomeScreen>
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
