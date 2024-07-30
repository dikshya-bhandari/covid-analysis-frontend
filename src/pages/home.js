import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/home.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Covid Data Visualizer</h1>
        <p>
          Explore the evolving landscape of the COVID-19 pandemic with our
          dynamic data visualizer. This tool offers real-time insights into
          infection rates, recovery statistics, and vaccination progress across
          the globe. Designed for accessibility and precision, our visualizer
          helps policymakers, researchers, and the public understand the impact
          of the virus through interactive charts and maps. Stay informed with
          the latest trends and patterns, all at your fingertips.
        </p>
        <Link to="/visualize">
          <Button className="button">Visualize</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
