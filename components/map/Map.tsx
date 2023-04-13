'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const Map = ({
  lat,
  lng,
}: {
  lat: number | undefined;
  lng: number | undefined;
}) => {
  return (
    <MapContainer
      className='leafletContainer'
      center={[39.828175, -98.5795]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {lat && lng && (
        <Marker
          position={[lat, lng]}
          icon={
            new Icon({
              iconUrl: markerIconPng.src,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          {/* <Popup>IP Address</Popup> */}
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
