import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const IpMap = ({location}) => {
  return (
    <div className='leafletContainer'>
      <MapContainer
        //TODO add auto zoom to center map on point
        center={[39.828175, -98.5795]}
        zoom={3}
        scrollWheelZoom={true}
        className='leafletContainer'
      > 
        <TileLayer
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {location ? (
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>IP Address</Popup>
          </Marker>
        ) : null}
      </MapContainer>
    </div>
  );
};

export default IpMap;
