import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import ImageGrid from './components/ImageGrid/ImageGrid.jsx';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const api='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d333136e96d0d965f47b3f939d913fa8&text='
  const api2 = '&safe_search=1&per_page=&page=&format=json&nojsoncallback=1'
  return (
    <div className="App">
      <Header />
      <ImageGrid />
    </div>
  );
}

export default App;
