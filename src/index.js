import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, HashRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBF3SHP38ZZGBEGhmmiXD-N50MwE6taL7w",
  authDomain: "messaging-app-dc03d.firebaseapp.com",
  databaseURL: "https://messaging-app-dc03d.firebaseio.com",
  projectId: "messaging-app-dc03d",
  storageBucket: "messaging-app-dc03d.appspot.com",
  messagingSenderId: "462664318963",
  appId: "1:462664318963:web:abef1551f827da1da09c86",
  measurementId: "G-XPQFN9TSD9",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/" exact component={LoginComponent}></Route>
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
