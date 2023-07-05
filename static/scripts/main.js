const x = document.getElementById("demo");
const artist = document.getElementById("favoriteArtist")

// Web api /navigator/
const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
//Web api // 
//3rd party API// 
const showPosition = async(position) => {
//   x.innerHTML = `Jouw locatie is ${position.coords.latitude, position.coords.longitude} `

  const url = `https://geocodeapi.p.rapidapi.com/GetTimezone?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '10199f0078msh4955a82de78ff0ep181f26jsn907092470603',
          'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
      }
  };
  
  try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

        x.innerHTML = `Your location is ${result.Country}`
      

  } catch (error) {
      console.error(error);
  }
}

getLocation()

const artistList = [];
const mijnFunctie=  (event) => {
    event.preventDefault();
    const value = artist.value;
    console.log(value)

    artistList.push(value)
    const node = document.createElement("li");
    const textnode = document.createTextNode(value);
    
    node.appendChild(textnode);
    
    document.querySelector("#Lijst").appendChild(node); 

    artist.value = "";
}
    
const button = document.querySelector("#mijnKnop");
button.addEventListener('click', mijnFunctie);

const liam = document.querySelector 

