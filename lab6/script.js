const url = "https://randomuser.me/api";

document.getElementById('downloadButton').onclick = () => {
  const people = document.getElementsByClassName('personContainer');
  const isError = 0;
  for(let person of people) {
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const personData = data.results[0];
      
      const picture = personData.picture.large;
      const fullNameObject = personData.name;
      const fullName = Object.values(fullNameObject).join(' ');
      const country = personData.location.country;
      const postCode = personData.location.postcode;
      const phoneNumber = personData.phone;
      
      // const image = document.createElement('img');
      // image.src = picture;
      // person.appendChild(image);
      // person.appendChild
      // person.appendChild(document.createTextNode(fullName));
      // person.appendChild(document.createTextNode(country));
      // person.appendChild(document.createTextNode(postCode));
      // person.appendChild(document.createTextNode(phoneNumber));

      person.innerHTML = `
        <img src=${picture}></img>
        <p>Name: ${fullName}</p>
        <p>Country: ${country}</p>
        <p>Post Code: ${postCode}</p>
        <p>Phone Number: ${phoneNumber}</p>
      `
    })
    .catch(error => {
      const messageArea = document.getElementById('messageArea');
      const message = document.createElement('p');
      message.innerHTML = `Error!: ${error}`;
      message.style.color = 'red';
      messageArea.appendChild(message);
    })
  }
}

