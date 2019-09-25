import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import './reset.css'
import './App.css';
import history from './utils/history';
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signUp" component={SignUp}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
