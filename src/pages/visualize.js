import React, { useState } from "react";
import { Button, DatePicker, Divider, Empty, Select, Skeleton } from "antd";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";
import Plot from "react-plotly.js";
import "../styles/visualize.css";
import countryCodes from "../constants/countryCodes";
import { getDatefromDateRange } from "../utils/apiCalls";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const Visualizer = () => {
  const [dates, setDates] = useState([
    moment("2020-02-01"),
    moment("2020-02-20"),
  ]);
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [datatoPlot, setDatatoPlot] = useState([]);

  const onChangeDate = (dates) => {
    setDates(dates);
  };

  const disabledDaysDate = (current, next) => {
    return false;
  };

  const onCountryChange = (value) => {
    setCountry(value);
  };

  const onShowGraph = () => {
    setLoading(true);
    const startDate = dates[0].format("YYYY-MM-DD");
    const endDate = dates[1].format("YYYY-MM-DD");
    getDatefromDateRange(startDate, endDate)
      .then((res) => {
        const data = res.map((x) => x._source);
        setLoading(false);
        setDatatoPlot(data);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const dateFormat = "YYYY-MM-DD";
  const requiredDates = datatoPlot.map((x) => x.date);
  const requiredData = datatoPlot.map((x) => {
    const req = x.allData.filter((x) => x.iso === country)[0];
    return req;
  });
  const fields = [
    "active",
    "active_diff",
    "confirmed",
    "confirmed_diff",
    "deaths",
    "deaths_diff",
    "fatality_rate",
    "recovered",
    "recovered_diff",
  ];

  return (
    <div className="visualize-container">
      <div className="input-section">
        <div className="i-input-section">
          <p className="i-input-section-p">Select Date Range</p>
          <RangePicker
            value={dates}
            disabledDate={disabledDaysDate}
            format="YYYY-MM-DD"
            onCalendarChange={(dates) => onChangeDate(dates)}
            placeholder="Please select a date range"
            minDate={dayjs("2020-02-01", dateFormat)}
            maxDate={dayjs("2023-02-01", dateFormat)}
          />
        </div>
        {dates[0] && dates[1] && (
          <ArrowRightOutlined style={{ fontSize: 20 }} />
        )}
        {dates[0] && dates[1] && (
          <div className="i-input-section">
            <p className="i-input-section-p">Select Country</p>
            <Select
              style={{
                width: 200,
              }}
              showSearch
              options={countryCodes.map((x) => {
                return { value: x.iso, label: x.name };
              })}
              placeholder="Please select a country"
              onChange={onCountryChange}
            />
          </div>
        )}
        {dates[0] && dates[1] && country && (
          <Button className="i-button" onClick={onShowGraph}>
            Show Graphs
          </Button>
        )}
      </div>
      <Divider />
      {(loading && <Skeleton />) ||
        (datatoPlot.length > 0 && (
          <div className="plot-div">
            {fields.map((field, i) => (
              <div
                key={i}
                className="i-plot-div"
                style={{ width: window.innerWidth / 2.5 }}
              >
                <Plot
                  data={[
                    {
                      x: requiredDates,
                      y: requiredData.map((x) => x[field]),
                      type: "scatter",
                      mode: "lines+markers",
                      marker: { color: "red" },
                    },
                  ]}
                  layout={{
                    width: window.innerWidth / 2.5,
                    title: `${field
                      .replace("_", " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())} Cases`,
                  }}
                />
              </div>
            ))}
          </div>
        )) || <Empty />}
    </div>
  );
};

export default Visualizer;
