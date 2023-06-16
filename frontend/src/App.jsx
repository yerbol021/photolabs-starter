import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <PhotoListItem key={1}/>
  </div>
)

export default App