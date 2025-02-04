import React, { useState } from 'react';
import FavIcon from './components/FavIcon';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import './styles/PhotoListItem.scss';


const App = () => {
  const photos = [1, 2, 3]; // Create an array of three elements
  console.log("test", photos);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
  setIsFavorite(!isFavorite);
};
  return (
    <div className="App">
      <div className='photo-list'>
      {photos.map((photoId) => (
        <PhotoListItem key={photoId} />
        ))}
      </div>
      <FavIcon isFavorite={isFavorite} onClick={handleFavoriteClick} />
    </div>
  );
};

export default App;
