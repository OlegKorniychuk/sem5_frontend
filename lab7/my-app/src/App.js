import React, { useState } from 'react';
import './style.css';
import Content from './components/Content.js';
import Header from './components/Header.js';
import Image from './components/Image.js';
import GoodsCard from './components/GoodsCard.js';

// App component
function App() {
  const [hasNewImage, setHasNewImage] = useState(false);
  const [newImageSize, setNewImageSize] = useState(100);
  const [labPart, setLabPart] = useState(1);

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

  const goToFirstPart = () => {
    setLabPart(1);
  }

  const goToSecondPart = () => {
    setLabPart(2);
  }

  return (
    <>
    {labPart === 1 ? (
      <div className="App">
      <div>
        <button onClick={goToSecondPart}>Part 2</button>
      </div>
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
    ) : (
      <div>
        <div>
          <button onClick={goToFirstPart}>Part 1</button>
        </div>
        <div className='goodsCardsContainer'>
          <GoodsCard name='BMW' price='1250000' image='bmw.jpg' />
          <GoodsCard name='Fiat' price='470000' image='fiat.jpg' />
          <GoodsCard name='Ford' price='385000' image='ford.jpg' />
          <GoodsCard name='Opel' price='420000' image='opel.jpg' />
          <GoodsCard name='Scoda' price='710000' image='scoda.jpg' />
          <GoodsCard name='Toyota' price='940000' image='toyota.jpg' />
        </div>
      </div>
    )}
    </>
    
  );
}

export default App;
