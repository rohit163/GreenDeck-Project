import React from "react";
import Styles from "../css/chart.module.css";
import logo from "../images/analysis.svg";
function Header() {
  return (
    <div className={Styles.Header}>
      <div>
        <img className={Styles.logo} src={logo} alt="logo" />
      </div>{" "}
      <div>
        <h1>Easy Chart </h1>{" "}
      </div>{" "}
    </div>
  );
}
export default Header;
