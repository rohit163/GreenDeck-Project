import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./css/chart.module.css";
import Header from "./components/header.jsx";
import Chart from "./components/chart.jsx";
import CurrentDetails from "./components/current.jsx";
import Buttons from "./components/buttons.jsx";

function App() {
  const [data, setData] = useState([]);
  const [chart, setchart] = useState([]);
  const [current, setCurrent] = useState(false);

  const handleChart = (id) => {
    axios({
      method: "get",
      url: `http://localhost:5000/data/chart`,
      params: {
        id: id,
      },
    })
      .then((res) => setchart(res.data))
      .catch((err) => console.log(err));
      
    //current data capture 
    let curr = data.find((item) => item._id === id);
    setCurrent(curr);
  };

  useEffect(() => {
    //initial data capture
    axios({
      method: "get",
      url: "http://localhost:5000/data",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error data loading"));
  }, []);
return (
    <div style={{ textAlign: "center" }} className={Styles.Container}>
      <Header />
      <Chart chart={chart} />
      <CurrentDetails current={current} />
      <Buttons handleChart={handleChart} data={data} />
    </div>
  );
}
export default App;
