import React from 'react';

// Display the images, if there are no results, let the user know.
// Read about how to contruct a url here: https://www.flickr.com/services/api/misc.urls.html
export default props => {
  if (!props.images) return <div></div>;

  return <div className="photo-container">
      <ul>
        {props.images.map(image => {
          return <li key={image.id}>
              <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} alt="flickr images" />
            </li>;
        })}
      </ul>
    </div>;
};
