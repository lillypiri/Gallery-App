import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Kittens from "./Kittens";


// Use the flickr.photos.search endpoint/method

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flickr</h1>
        </header>
        <p className="App-intro">
        </p>
        <BrowserRouter>
          <Route path="/Kittens"  component={Kittens} />
        </BrowserRouter>
      </div>;
  }
}

export default App;