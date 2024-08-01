import { Button, DatePicker, Empty, message, Skeleton } from "antd";
import React, { useState } from "react";
import moment from "moment";

import Plot from "react-plotly.js";
import countryCodes from "../constants/countryCodes";
import coordinates from "../constants/countryCoordinates";
import "../styles/visualize.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { getDatafromDate } from "../utils/apiCalls";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const WorldMap = () => {
  const [selectedDate, setSelectedDate] = useState(moment("2020-02-01"));
  const [selectedDateStr, setSelectedDateStr] = useState("2020-02-01");
  const [loading, setLoading] = useState(false);
  const [covidData, setCovidData] = useState([]);
  const [selectedIso, setSelectedIso] = useState("");
  const dateFormat = "YYYY-MM-DD";

  const handleClick = (event) => {
    const pointIndex = event.points[0].pointIndex;
    const clickedPoint = data[pointIndex];
    // alert(`Clicked on: ${clickedPoint.name} with value: ${clickedPoint.value}`);
    setSelectedIso(clickedPoint.iso);
  };

  const onChange = (date, dateString) => {
    setSelectedDate(date);
    setSelectedDateStr(dateString);
    setCovidData([]);
    setSelectedIso("");
  };

  const onShowWorldMap = () => {
    setLoading(true);
    getDatafromDate(selectedDateStr)
      .then((res) => {
        setLoading(false);
        console.log(res[0]?._source);
        setCovidData(res[0]?._source?.allData || []);
      })
      .catch((err) => {
        setLoading(false);
        message.error("Fetching data for selected date failed");
      });
  };

  const data = coordinates.map((x) => {
    const country = countryCodes.find((y) => y.iso === x.iso);
    const covidInfo = covidData.find((y) => y.iso === x.iso);
    return {
      ...x,
      name: country ? country.name : "Unknown",
      value: covidInfo ? covidInfo.confirmed : 0,
    };
  });

  const lats = data.map((point) => point.lat);
  const longs = data.map((point) => point.long);
  const values = data.map((point) => point.value);
  const texts = data.map(
    (point) => `Name: ${point.name}<br>Value: ${point.value}`
  );

  const selectedItem =
    (selectedIso && covidData.filter((x) => x.iso === selectedIso)[0]) || {};

  return (
    <div className="visualize-container">
      <div className="input-section">
        <div className="i-input-section">
          <p className="i-input-section-p">Select Date</p>
          <DatePicker
            style={{ width: 250 }}
            onChange={onChange}
            value={selectedDate}
            placeholder="Select data to plot graphs"
            format="YYYY-MM-DD"
            minDate={dayjs("2020-02-01", dateFormat)}
            maxDate={dayjs("2023-02-01", dateFormat)}
            defaultValue={dayjs("2020-02-01", dateFormat)}
            disabledDate={(current) =>
              current &&
              (current < dayjs("2020-02-01", dateFormat) ||
                current > dayjs("2023-02-01", dateFormat))
            }
          />
        </div>
        {selectedDate && <ArrowRightOutlined style={{ fontSize: 20 }} />}
        {selectedDate && (
          <Button className="i-button" onClick={onShowWorldMap}>
            Show World Map
          </Button>
        )}
      </div>
      {(!loading &&
        ((covidData.length > 0 && (
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
              title: "New cases frequency plot",
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
            style={{
              width: window.innerWidth,
              height: 0.8 * window.innerHeight,
            }}
          />
        )) || <Empty />)) || <Skeleton />}
      {selectedIso && (
        <div className="world-map-detailed">
          <p className="detail">Selected ISO: {selectedIso}</p>
          <p className="detail">
            Selected Country/Region:{" "}
            {data.filter((x) => x.iso === selectedIso)[0].name}
          </p>
          <p className="detail">Confirmed: {selectedItem.confirmed}</p>
          <p className="detail">Deaths: {selectedItem.deaths}</p>
          <p className="detail">Recovered: {selectedItem.recovered}</p>
          <p className="detail">
            Confirmed Diff: {selectedItem.confirmed_diff}
          </p>
          <p className="detail">Deaths Diff: {selectedItem.deaths_diff}</p>
          <p className="detail">
            Recovered Diff: {selectedItem.recovered_diff}
          </p>
          <p className="detail">Active: {selectedItem.active}</p>
          <p className="detail">Active Diff: {selectedItem.active_diff}</p>
          <p className="detail">Fatality Rate: {selectedItem.fatality_rate}</p>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
