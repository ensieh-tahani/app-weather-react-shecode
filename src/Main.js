import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route
            exact={true}
            path="/"
            element={
              <div className="App">
                <Weather city="lisbon" />
              </div>
            }
          />
          <Route
            exact={true}
            path="/paris"
            element={
              <div className="App">
                <Weather city="Paris" />
              </div>
            }
          />
          <Route
            exact={true}
            path="/sydney"
            element={
              <div className="App">
                <Weather city="Sydney" />
              </div>
            }
          />
          <Route
            exact={true}
            path="/san-francisco"
            element={
              <div className="App">
                <Weather city="San Francisco" />
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}
