// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.message === "map_addresses") {
//       var addresses = document.querySelectorAll('.sf-realestate-location');
//       console.log("Yoho", addresses)
//       var addressesArray = Array.from(addresses).map(function(address) { return address.value; });
//       var addressesString = addressesArray.join('|');
//       var url = "https://maps.google.com/maps?q=" + encodeURIComponent(addressesString);
//       window.open(url, '_blank');
//     }
//   });
  
  // Get the address from the popup HTML
const addressElement = document.querySelector('.sf-realestate-location');
const address = addressElement.textContent;

// Use the Google Maps Geocoding API to convert the address to a latitude and longitude
const geocoder = new google.maps.Geocoder();
geocoder.geocode({ address }, (results, status) => {
  if (status === 'OK') {
    const { lat, lng } = results[0].geometry.location;

    // Create a new map with the latitude and longitude as the center
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 13,
    });

    // Add a marker at the latitude and longitude
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
      title: address,
    });
  }
});


