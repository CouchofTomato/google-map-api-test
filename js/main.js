'use strict'

const long = document.getElementById('longitude')
const lat = document.getElementById('latitude')
const messageBox = document.getElementById('message')
const submit = document.getElementById('submit')
let mapBox = document.getElementById('map')
const mapProps = {
  center: { lat: 51.508742, lng: -0.120850 },
  zoom: 8
}
let map

function initMap() {
  map = new google.maps.Map(mapBox, mapProps)
}

const resetInputs = () => {
  long.value = ''
  lat.value = ''
  messageBox.value = ''
}

const addMarkerCallback = (message, marker) => {
  google.maps.event.addListener(marker, 'click', function() {
    var infowindow = new google.maps.InfoWindow({
      content: message
    });
    infowindow.open(map, marker);
  });
}

const addMessage = (e) => {
  e.preventDefault()
  const message = messageBox.value
  const myCenter = new google.maps.LatLng(lat.value, long.value)
  const marker = new google.maps.Marker({ position: myCenter })
  marker.setMap(map)
  map.panTo(myCenter)
  addMarkerCallback(message, marker)
  resetInputs()
}

submit.addEventListener('click', addMessage, false)
