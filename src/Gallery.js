import React from "react";
import PropTypes from "prop-types";
var Spinner = require("react-spinkit");


const Gallery = (props) => {
    if (props.image) {
    return <div className="photo-container">
        <ul>
          {props.image.photo.map(image => {
            return <li>
                <img key={image.id} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} alt="flickr images" />
              </li>;
          })}
        </ul>
      </div>;
    } else {
        return <div><h2>-------LOADING---------</h2></div>
    }
    //console.log("GALLERY", props.image);
}

export default Gallery;