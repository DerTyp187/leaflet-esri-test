import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useInterval } from "react";
import { geojson1, geojson2 } from "./atd";

let number = 1;

function Map() {
	const [currentGeoJson, setCurrentGeoJson] = useState(geojson1);

	useInterval(() => {
		console.log("sf");
		if (number === 1) {
			setCurrentGeoJson(geojson2);
		} else if (number === 2) {
			setCurrentGeoJson(geojson1);
		}
	}, 2000);

	function renderHeatmap() {
		//console.log("Render");
		return (
			<HeatmapLayer
				fitBoundsOnLoad
				fitBoundsOnUpdate
				points={currentGeoJson.features}
				longitudeExtractor={(m) => m.geometry.coordinates[0]}
				latitudeExtractor={(m) => m.geometry.coordinates[1]}
				intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
			/>
		);
	}

	return (
		<LeafletMap id="mapId" zoom={2} center={[39.759, -88.157]}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{/*console.log("lastRefreshed ago: " + (Date.now() - lastRefreshed))*/}
			{/*Date.now() - lastRefreshed >= 5000 ? turnOffMap() : renderHeatmap()*/}
			{renderHeatmap()}
		</LeafletMap>
	);
}

export default Map;
