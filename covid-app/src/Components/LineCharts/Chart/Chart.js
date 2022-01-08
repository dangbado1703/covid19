import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import moment from "moment";
import "./Chart.css";

const garenateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca nhiễm",
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};

function Chart({ data }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");
  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = data;
        break;
      case "30":
        customData = data.slice(data.length - 30)
        break;
      case "7":
        customData = data.slice(data.length - 7);
        break;
      default:
        customData = data;
        break;
    }
    setOptions(garenateOptions(customData));
  }, [data, reportType]);

  return (
    <>
      <div className="button">
        <button
          type="button"
          style={reportType === "all" ? { color: "#ff9696" } : { color: "" }}
          onClick={() => setReportType("all")}
        >
          Tất cả
        </button>
        <button
          type="button"
          style={reportType === "30" ? { color: "#ff9696" } : { color: "" }}
          onClick={() => setReportType("30")}
        >
          30 ngày
        </button>
        <button
          type="button"
          style={reportType === "7" ? { color: "#ff9696" } : { color: "" }}
          onClick={() => setReportType("7")}
        >
          7 ngày
        </button>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default Chart;
