import React from 'react';
import { Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './map.scss';

const position = [51.505, -0.09]

const ligaBankIcon = L.icon({
  iconUrl: '/img/icon/marker.svg',
  iconSize: [64, 64],
  iconAnchor: [32, 64],
});

const markers = [
  { key: 1, position: [51.505, -0.09], popupText: 'Текст1' },
  { key: 2, position: [51.515, -0.09], popupText: 'Текст2' },
  { key: 3, position: [51.525, -0.09], popupText: 'Текст3' },
  { key: 4, position: [51.535, -0.09], popupText: 'Текст4' },
];

function MapRender() {
  return (
    <Fragment>
      
      <div className='map-container'>
      <h2 className='bank-branches'>Отделения Лига Банка</h2>
        <MapContainer center={position} zoom={12} scrollWheelZoom={false} style={{ height: "462px", width: "100%" }}>
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
