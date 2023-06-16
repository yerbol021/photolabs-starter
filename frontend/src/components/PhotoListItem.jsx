
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({username, location}) => {
  return (
    <div className="photo-list-item">
      <img src={`${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`} alt="Photo" />
      <div className="details">
        <div className="username">{username}</div>
        <div className="location">The photo is made in {location.city} which is in {location.country}</div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem