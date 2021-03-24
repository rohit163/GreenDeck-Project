import React from "react";
import { LineChart, XAxis, CartesianGrid, Tooltip, Line } from "recharts";
import Styles from "../css/chart.module.css";
function Chart({ chart }) {
  const data=chart
  return (
    <div className={Styles.Chart}>
      <LineChart width={8000} height={300} data={data}>
        <XAxis />
        <Tooltip />
        <CartesianGrid />
        <Line dataKey="max_band" stroke="green" />
        <Line dataKey="original_value" stroke="black" />
        <Line dataKey="forecasted_value" strokeDasharray="1 1" />
        <Line dataKey="min_band" stroke="green" />
      </LineChart>
    </div>
  );
}
export default Chart;
