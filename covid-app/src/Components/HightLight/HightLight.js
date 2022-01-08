import React from "react";
import "./HightLight.css";
import InforHightLight from "./InforHightLighe/InforHightLight";

function HightLight({ data }) {
  const countData = data && data.length ? data[data.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: countData.Confirmed,
      type: "confirmed",
    },
    {
      title: "Khỏi",
      count: countData.Recovered,
      type: "recovered",
    },
    {
      title: "Tử vong",
      count: countData.Deaths,
      type: "death",
    },
  ];
  return (
    <div className="hightlight">
      <div className="infor">
        <InforHightLight data={summary} />
      </div>
    </div>
  );
}

export default HightLight;
