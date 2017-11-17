import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Kittens from "./Kittens";
import Puppies from "./Puppies";
import Birbs from "./Birbs";
import Container from "./Container";
// Use the flickr.photos.search endpoint/method

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flickr</h1>
        </header>

        <BrowserRouter>
          <div>
            <Route path="/kittens" component={Kittens} />
            <Link to="/kittens">Kittens |</Link>

            <Route path="/puppies" component={Puppies} />
            <Link to="/puppies">Puppies |</Link>

            <Route path="/birbs" component={Birbs} />
            <Link to="/birbs">Birbs</Link>

            <Route path="/container" component={Container} />
            <Link to="/container">Container</Link>
          </div>
        </BrowserRouter>
      </div>;
  }
}

export default App;