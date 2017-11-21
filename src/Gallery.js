import React from 'react';

export default props => {
  if (!props.images || props.images.length === 0) return <div>No results</div>;

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
