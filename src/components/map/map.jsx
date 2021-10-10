import React from 'react';
import { Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './map.scss';

const position = [51.505, -0.09]
L.Icon.Default.imagePath = "/";

function MapRender() {
  return (
    <Fragment>
      <div className='map-container'>
        <MapContainer center={position} zoom={12} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} draggable={true} animate={true}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Fragment>
  );
};

export default MapRender
