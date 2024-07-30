import React from "react";
import Plot from "react-plotly.js";

const data = [
  { name: "XX", lat: 25.44, long: 26.44, value: 10 },
  { name: "XX", lat: 27.44, long: 23.44, value: 12 },
];

const WorldMap = () => {
  const handleClick = (event) => {
    const pointIndex = event.points[0].pointIndex;
    const clickedPoint = data[pointIndex];
    alert(`Clicked on: ${clickedPoint.name} with value: ${clickedPoint.value}`);
  };

  const lats = data.map((point) => point.lat);
  const longs = data.map((point) => point.long);
  const values = data.map((point) => point.value);
  const texts = data.map(
    (point) => `Name: ${point.name}<br>Value: ${point.value}`
  );

  return (
    <Plot
      data={[
        {
          type: "scattergeo",
          mode: "markers",
          lat: lats,
          lon: longs,
          text: texts,
          marker: {
            size: 8,
            color: values,
            colorscale: "Viridis",
            colorbar: {
              title: "Value",
              titleside: "right",
            },
          },
        },
      ]}
      layout={{
        title: "Shaded Points on World Map",
        geo: {
          scope: "world",
          projection: { type: "natural earth" },
          showland: true,
          landcolor: "rgb(243, 243, 243)",
          subunitwidth: 1,
          countrywidth: 1,
          subunitcolor: "rgb(217, 217, 217)",
          countrycolor: "rgb(217, 217, 217)",
        },
      }}
      onClick={handleClick}
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

export default WorldMap;
