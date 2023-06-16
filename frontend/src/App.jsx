import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

const App = () => {
  const photos = [1]; // Create an array of three elements

  return (
    <div className="App">
      <div className='photo-list'>
      {photos.map((photoId) => (
        <PhotoList key={photoId} />
        ))}
      </div>
    </div>
  );
};

export default App;
