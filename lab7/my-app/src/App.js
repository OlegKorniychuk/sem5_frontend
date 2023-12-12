import React, { useState } from 'react';
import './style.css';
import Content from './components/Content.js';
import Header from './components/Header.js';
import Image from './components/Image.js';

// App component
function App() {
  const [hasNewImage, setHasNewImage] = useState(false);
  const [newImageSize, setNewImageSize] = useState(100);

  const handleAddImage = () => {
    setNewImageSize(100);
    setHasNewImage(true);
  };

  const handleUpscaleImage = () => {
    setNewImageSize(150);
  };

  const handleDownscaleImage = () => {
    setNewImageSize(50);
  };

  const handleRemoveImage = () => {
    setHasNewImage(false);
  };

  return (
    <div className="App">
      <Header/>
      <Content />
      <Image />
      <div className="container">
        <button id="addButton" onClick={handleAddImage}>
          Add image
        </button>
        <button id="upscaleButton" onClick={handleUpscaleImage}>
          Upscale image
        </button>
        <button id="downscaleButton" onClick={handleDownscaleImage}>
          Downscale image
        </button>
        <button id="removeButton" onClick={handleRemoveImage}>
          Remove image
        </button>
      </div>
      {hasNewImage ? (
          <img
            src="https://amongusio.io//data/image/game/amongus_featureimage2.jpg"
            alt="AMONGUS"
            id="newImage"
            height={newImageSize+'%'}
            width={newImageSize+'%'}
          />
        ) : (
          <></>
        )}
    </div>
  );
}

export default App;
