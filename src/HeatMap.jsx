import React, { useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import { useEffect } from "react";

//! PROBLEM
// Wenn sate updated wird ein neuer layer hinzugefügt und der alte bleibt noch da.
// Testen: Etwas laufen lassen und dann mal ein kommentar in diesem code speicher (damit der browser refresht)

function randomFromInterval(min, max) {
	// min and max included
	return Math.random() * (max - min + 1) + min;
}

let layer = L.heatLayer([]);

function HeatMap(props) {
	const map = useMap();
	useEffect(() => {
		layer.addTo(map);
		const interval = setInterval(() => {
			//console.log(map._layers);
			const points = [
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
				[
					randomFromInterval(52.3, 52.4),
					randomFromInterval(0.1, -0.1),
					randomFromInterval(0, 500),
				],
			].map((p) => {
				return [p[0], p[1], p[2]]; // lat lng intensity
			});

			layer.setLatLngs(points);
		}, 2000);
		return () => clearInterval(interval);
	}, []);
}

export default HeatMap;
