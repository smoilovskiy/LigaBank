import React from 'react';
import { Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './map.scss';

const position = [56.70, 60.35];

const ligaBankIcon = L.icon({
  iconUrl: '/img/icon/marker.svg',
  iconSize: [64, 64],
  iconAnchor: [32, 64],
});

const markers = [
  { key: 1, position: [57.09, 65.32], popupText: 'Текст1' },
  { key: 2, position: [55.45, 37.36], popupText: 'Текст2' },
  { key: 3, position: [51.53, 46.00], popupText: 'Текст3' },
  { key: 4, position: [54.59, 73.22], popupText: 'Текст4' },
  { key: 5, position: [55.57, 49.70], popupText: 'Текст5' },
];

function MapRender() {
  return (
    <Fragment>
      
      <div className='map-container'>
      <h2 className='bank-branches'>Отделения Лига Банка</h2>
        <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ height: "462px", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map(marker => (
            <Marker key={marker.key} position={marker.position} icon={ligaBankIcon}>
              <Popup>
                {marker.popupText} <br/> Easily customizable.
              </Popup>
            </Marker>
          )
          )}

        </MapContainer>
      </div>
    </Fragment>
  );
};

export default MapRender
