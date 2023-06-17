import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';
import './styles/PhotoListItem.scss';


const App = () => {
  const photos = [1, 2, 3]; // Create an array of three elements
  console.log("test", photos);

  const handleClick = () => {
    // Handle button click event
    console.log('Button clicked!');
  };
  
  return (
    <div className="App">
      <div className='photo-list'>
      {photos.map((photoId) => (
        <PhotoListItem key={photoId} />
        ))}
      </div>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default App;
