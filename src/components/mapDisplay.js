import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

function LocateMeButton({ onLocationFound }) {
    const map = useMapEvents({
        locationfound(e) {
            onLocationFound(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    const locateMe = () => {
        map.locate();
    };

    return (
        <svg onClick={locateMe} xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="locate-button bi bi-crosshair" viewBox="0 0 16 16">
            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        </svg>
    );
}

export function OpenMap({ routeData }) {
    const [userLocation, setUserLocation] = useState(null);

    const handleLocationFound = (latlng) => {
        setUserLocation(latlng);
    };
    const { routeName, uploadedFile } = routeData;

    var gpxData = new gpxParser()
    gpxData.parse(uploadedFile)
	const positions = gpxData.tracks[0].points.map(p => [p.lat, p.lon])

    const defaultPos = [38.8085603, -77.093475]

    return (
        <div className="map-container">
            <MapContainer center={defaultPos} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocateMeButton onLocationFound={handleLocationFound} />
            </MapContainer>
        </div>
    );
}