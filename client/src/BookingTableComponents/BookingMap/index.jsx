// GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 37.7749, // Set your initial latitude
    lng: -122.4194, // Set your initial longitude
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCc3GCcvnS-h_KnlbaQtK1xnmbMvWZRrLw" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
