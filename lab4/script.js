const element9 = document.getElementById('element9');
element9.onclick = () => {
  const className = element9.className;
  className === 'clicked-1' ? element9.className = '' : element9.className = 'clicked-1';
}

const element10 = document.querySelector('#element10');
element10.onclick = () => {
  const className = element10.className;
  className === 'clicked-2' ? element10.className = '' : element10.className = 'clicked-2';
}

const addButton = document.getElementById('addButton');
addButton.onclick = () => {
  const images = document.getElementById('images');
  const newImage = document.createElement('img');
  newImage.src = 'https://amongusio.io//data/image/game/amongus_featureimage2.jpg';
  newImage.alt = 'AMONGUS';
  newImage.id = 'newImage'
  if (images.children.length === 1) {
    images.appendChild(newImage);
  }
}


const upscaleButton = document.getElementById('upscaleButton');
upscaleButton.onclick = () => {
  const newImage = document.getElementById('newImage');
  if (newImage) {
    newImage.style.height = '150%';
    newImage.style.width = '150%';
  }
}

const downscaleButton = document.getElementById('downscaleButton');
downscaleButton.onclick = () => {
  const newImage = document.getElementById('newImage');
  if (newImage) {
    newImage.style.height = '50%';
    newImage.style.width = '50%';
  }
}

const removeButton = document.getElementById('removeButton');
removeButton.onclick = () => {
  const newImage = document.getElementById('newImage');
  if (newImage) {
    newImage.remove();
  }
}