import React, { Component } from 'react';
import apiKey from "./config.js";
import "./index.css";
const query = 'birbs';
require('isomorphic-fetch');



class Birbs extends Component {
    constructor (props) {
        super(props);

        this.state = {
            image: null
        }
    }

    componentDidMount () {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&safe_search=restricted&format=json&nojsoncallback=1`).then(function(response) {
            if (response.status >= 400) {
                console.log("in error")
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(response => {
            this.setState({
                image: response.photos
            })
            // console.log("after set state", this.state.image.photo[0].farm);
            // console.log("thing", `https://farm${this.state.image.photo[0].farm}.staticflickr.com/${this.state.image.photo[0].server}/${this.state.image.photo[0].id}_${this.state.image.photo[0].secret}.jpg`);
        });
    }

    render() {
        if (!this.state.image) return null;

        return <div className="photo-container">
            <ul>
              {this.state.image.photo.map(image => {
                // console.log("AN IMAGE", image);
                return <li>
                    <img key={image.id} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} alt="flickr images" />
                  </li>;
              })}
            </ul>
          </div>;
    }
}

export default Birbs;

