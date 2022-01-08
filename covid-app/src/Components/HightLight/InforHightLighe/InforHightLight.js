import React from "react";
import CountUp from "react-countup";
function InforHightLight({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          style={
            item.type === "confirmed"
              ? { borderLeft: "5px solid #c9302c" }
              : item.type === "recovered"
              ? { borderLeft: "5px solid #28a745" }
              : { borderLeft: "5px solid gray" }
          }
        >
          <p>{item.title}</p>
          <p>
            <CountUp end={item.count || 0} duration={2} separator=" "/>
          </p>
        </div>
      ))}
    </>
  );
}

export default InforHightLight;
