import React from "react";
import Styles from "../css/chart.module.css";
function Buttons({ handleChart, data }) {
  let count = 1;
  return (
    <div className={Styles.ChartButtons}>
      {data &&
        data.map((item) => {
          return (
            <button key={item._id} onClick={() => handleChart(item._id)}>
              {count++}
            </button>
          );
        })}
    </div>
  );
}
export default Buttons;
