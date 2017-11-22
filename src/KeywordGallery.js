import React, { Component } from 'react';
import apiKey from './config.js';

import Gallery from './Gallery';
import Loading from 'react-loading-animation';

require('isomorphic-fetch');

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
    if(!this.state.isLoading && this.state.images && this.state.images.length === 0) {
      return (<div><h2>No results found</h2><p>That search did not return any results, please try again.</p></div>)
    }
    return (
      <div>
        <h2>{this.props.keyword}</h2>
        <Loading isLoading={this.state.isLoading}>
          <Gallery images={this.state.images} />
        </Loading>
      </div>
    );
  }
}

export default KeywordGallery;
