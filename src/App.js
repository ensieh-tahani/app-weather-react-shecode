import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navigation";
import Main from "./Main";
import "./App.css";
import Footer from "./Footer.js";
import "./Footer.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navigation />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}
