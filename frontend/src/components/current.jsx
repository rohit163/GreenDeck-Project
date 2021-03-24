import React from "react";
import Styles from "../css/chart.module.css";
function CurrentDetails({ current }) {
  return (
    <>
      {current ? (
        <div className={Styles.Details}>
          <h1>Details</h1>
          <p>
            Measure:<span> </span>
            {current.measure}
          </p>
          {current.dimensions.map((item) => (
            <p key={item.name}>
              {item.name}:<span> </span>
              {item.value}
            </p>
          ))}
        </div>
      ):<h3>Click on one button</h3>}
    </>
  );
}
export default CurrentDetails;
