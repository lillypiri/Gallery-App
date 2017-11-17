import React, { Component } from "react";
import apiKey from "./config.js";
import "./index.css";
import Gallery from "./Gallery";
require("isomorphic-fetch");



const keyword = "adoptdontshop";
/* A container component that takes in a keyword and api key as props,
 and fetches the photos and other required information from the API */
class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };
  }

  componentDidMount() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&safe_search=restricted&format=json&nojsoncallback=1`
    )
      .then(function(response) {
        if (response.status >= 400) {
          console.log("in error");
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(response => {
          console.log("got a response")
        this.setState({
          image: response.photos
        });
      });
  }

  render() {
    return (
      <Gallery 
         image={this.state.image} 
      />
    );
  }
}

export default Container;