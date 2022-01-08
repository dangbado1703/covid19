import React from "react";
import Chart from "./Chart/Chart";
import "./LineChart.css";

function LineChart({ data }) {
  return (
    <div>
      <div className="chart">
        <Chart data={data} />
      </div>
    </div>
  );
}

export default LineChart;
