import React, { Component } from 'react';
import apiKey from './config.js';

import Gallery from './Gallery';
import Loading from 'react-loading-animation';

require('isomorphic-fetch');

/* A container component that takes in a keyword and api key as props,
 and fetches the photos and other required information from the API */
class KeywordGallery extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      isLoading: false,
      images: null
    };
  }

  componentDidMount() {
    this.search(this.props.keyword);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword !== this.props.keyword) {
      this.search(nextProps.keyword);
    }
  }

  search(keyword) {
    this.setState(state => ({ isLoading: true }));

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
      .then(r => r.json())
      .then(json => {
        this.setState(state => ({ isLoading: false, images: json.photos.photo }));
      });
  }

  render() {
    return (
      <div>
        <h2>Results for {this.props.keyword}</h2>
        <Loading isLoading={this.state.isLoading}>
          <Gallery images={this.state.images} />
        </Loading>
      </div>
    );
  }
}

export default KeywordGallery;
