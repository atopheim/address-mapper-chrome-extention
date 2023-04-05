// Define the displayMap function
function displayMap() {
  // Get the address from the input field
  const address = document.getElementById('address').value;

  // Use a geocoding service to convert the address to a latitude and longitude
  const geocoder = L.Control.Geocoder.nominatim();
  geocoder.geocode(address, (results) => {
    const { lat, lng } = results[0].center;

    // Create a new map with the latitude and longitude as the center
    const map = L.map('map').setView([lat, lng], 13);

    // Add a marker at the latitude and longitude
    const marker = L.marker([lat, lng]).addTo(map);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  });
}

function search() {
  console.log('Search button clicked');
  var address = document.getElementById("address").value;
  var mapUrl = "https://maps.google.com/maps?q=" + encodeURIComponent(address);
  var map = document.getElementById('map');
  map.innerHTML = '<iframe src="' + mapUrl + '" width="100%" height="100%" frameborder="0"></iframe>';
}
// Add an event listener to the "Search" button

document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('searchBtn');
  searchButton.addEventListener('click', function() {
    console.log('Search button clicked');
    const addressInput = document.getElementById('addressInput');
    const address = addressInput.value;
    const geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(address, (results) => {
      const { lat, lng } = results[0].center;
      
      const map = L.map('map').setView([lat, lng], 13);
      
      L.Control.geocoder().addTo(map);
      L.marker([lat, lng]).addTo(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);
    });
  });
});


// const searchButton = document.querySelector('#search-button');
// console.log(searchButton);
// const searchButton2 = document.querySelector('#searchBtn');
// console.log(searchButton2);
// searchButton2.addEventListener('click', function() {
//   console.log('Search button2 clicked');
//   // add code to handle the search here
// });
// searchButton.addEventListener('click', function() {
//   console.log('Search button1 clicked');
//   // add code to handle the search here
// });