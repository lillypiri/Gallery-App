import React, { Component } from 'react';
import apiKey from './config.js';

import Gallery from './Gallery';
import SearchBar from './SearchBar';
import MainNav from './MainNav';
import Loading from 'react-loading-animation';

import './index.css';

require('isomorphic-fetch');

/* A container component that takes in a keyword and api key as props,
 and fetches the photos and other required information from the API */
class Container extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);

    this.state = {
      isLoading: false,
      images: null
    };
  }

  onSearch(searchWord) {
    this.setState(state => ({ isLoading: true }));

    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchWord}&per_page=24&safe_search=restricted&format=json&nojsoncallback=1`
    )
      .then(r => r.json())
      .then(json => {
        this.setState(state => ({
          isLoading: false,
          images: json.photos.photo
        }));
      });
  }

  componentDidMount() {
    this.onSearch('kittens');
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <MainNav />
        {this.state.isLoading ? <Loading /> : <Gallery images={this.state.images} />}
      </div>
    );
  }
}

export default Container;
