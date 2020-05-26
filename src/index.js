import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'mapbox-gl/dist/mapbox-gl.css' // Import of Mapbox CSS
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoicGluZWFwcGxlc29ucGl6emEiLCJhIjoiY2thOTJlZ2o3MGNsYjJ5cWY1cDNyb3BoYSJ9.Jbz9xMhMNnukmnmuYsozxQ';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
