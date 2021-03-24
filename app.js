const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());
app.use(cors());

const data = require("./metrics.json");
const chartdata = require("./chart.js");

mongoose.connect(
  process.env.CHART_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Mongo DB couldnt connect");
    } else {
      console.log("Mongo DB connected");
    }
  }
);

app.get("/data", (req, res) => {
  // chartdata.insertMany(data)
  chartdata
    .find()
    .then((chart) => res.status(200).json(chart))
    .catch((err) => res.status(404).json({ message: "data not found" }));
});

app.get("/data/chart", (req, res) => {
  let chart = require(`./backend/${req.query.id}.json`);
  res.json(chart);
});

app.listen("5000", () => {
  console.log("server running");
});
