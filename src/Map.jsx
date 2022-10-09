import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import HeatmapLayer from "react-esri-leaflet/plugins/HeatmapLayer";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const urls = [
	"https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0",
	"https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0",
];

let index = 0;

let lastRefreshed = Date.now();
let heatmapTurnedOff;
let isHeatmapOff = false;
function Map() {
	const [url, setUrl] = useState(
		"https://sampleserver6.arcgisonline.com/arcgis/rest/services/CommunityAddressing/MapServer/0"
	);
	const [refreshHook, setRefreshHook] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (Date.now() - lastRefreshed >= 1000) {
				if (index === 1) {
					setUrl(urls[index]);
					index = 0;
				} else {
					setUrl(urls[index]);
					index = 1;
				}
			}

			setRefreshHook(Math.random());
			//console.log(urls[index]);
		}, 100);

		return () => clearInterval(interval);
	}, []);

	function renderHeatmap() {
		//console.log("Render");
		return (
			<HeatmapLayer
				url={url}
				radius={20}
				eventHandlers={{
					loading: () => console.log("loading heatmap"),
				}}
			/>
		);
	}

	function turnOffMap() {
		//console.log("Turn off");

		if (!isHeatmapOff) {
			heatmapTurnedOff = Date.now();
			isHeatmapOff = true;
		}

		//console.log("heatmapTurnedOff ago: " + (Date.now() - heatmapTurnedOff));

		if (Date.now() - heatmapTurnedOff >= 50) {
			// Wie lange ist die heatpmap aus???
			//console.log("Turned off for 500");
			lastRefreshed = Date.now(); // Mach map wieder an
			isHeatmapOff = false;
		}

		return "";
	}

	return (
		<MapContainer id="mapId" zoom={2} center={[39.759, -88.157]}>
			{refreshHook ? "" : ""}
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{/*console.log("lastRefreshed ago: " + (Date.now() - lastRefreshed))*/}
			{Date.now() - lastRefreshed >= 5000 ? turnOffMap() : renderHeatmap()}
		</MapContainer>
	);
}

export default Map;
