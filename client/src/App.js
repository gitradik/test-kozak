import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import './reset.css'
import './App.css';
import history from './utils/history';
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import redirectToHome from "./utils/pageNotFound";
import PrivateRouterHome from "./utils/privateRouters/PrivateRouterHome";
import PrivateRouterSignInUp from "./utils/privateRouters/PrivateRouterSingInUp";
import Profile from "./pages/Profile/Profile";


function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <PrivateRouterHome exact path="/" component={Home}/>
                    <PrivateRouterHome path="/profile" component={Profile}/>
                    <PrivateRouterSignInUp path="/sign-up" component={SignUp}/>
                    <PrivateRouterSignInUp path="/sign-in" component={SignIn}/>
                    <Route path='*' exact={true} component={redirectToHome}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
