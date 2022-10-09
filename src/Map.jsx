import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeatMap from "./HeatMap";

function Map() {
	return (
		<MapContainer id="mapId" zoom={8} center={[52.505, -0.09]}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<HeatMap />
		</MapContainer>
	);
}

export default Map;
