import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const values = props.datePoints.map((dataPoint) => dataPoint.value);
  const highest = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            value={item.value}
            maxValue={highest}
          />
        );
      })}
      ;
    </div>
  );
}
