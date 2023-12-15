import React from 'react';

function GoodsCard(props) {
  let [name, price, image] = Object.values(props);
  return (
    <div className='goodsCard'>
      <img src={require('../images/'+image)} alt={image.substring(image.lastIndexOf('/') + 1)}></img>
      <p>{name}</p>
      <p>Cost: {price} hrn</p>
    </div>
  );
}

export default GoodsCard;