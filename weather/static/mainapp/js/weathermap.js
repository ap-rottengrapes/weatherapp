// Initialize map (already present in your code)
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Base layer: Esri Satellite
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
  maxZoom: 18
}).addTo(map);

// OpenWeatherMap API key
const apiKey = "d13f1f862f052aff750c594bbc106f26";


// Weather layers
const clouds = L.tileLayer(`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: '&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
});

const temperature = L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: '&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
});

const wind = L.tileLayer(`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: '&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
});

const precipitation = L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: '&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
});

const pressure = L.tileLayer(`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: '&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
});

const snow = L.tileLayer(`https://tile.openweathermap.org/map/snow_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: '&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
});

// Add all layers to the layer control
L.control.layers(null, {
  "Clouds": clouds,
  "Temperature": temperature,
  "Wind": wind,
  "Precipitation": precipitation,
  "Pressure": pressure,
  "Snow": snow
}).addTo(map);

// Optionally add one by default
clouds.addTo(map);
