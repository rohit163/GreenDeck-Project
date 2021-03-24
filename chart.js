const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let chartdata = new Schema({
  _id: {
    type: String,
    required: true,
  },
  measure: {
    type: String,
    required: true,
  },
  dimensions:{
      type:Array,
      required:true
  }
});

module.exports=mongoose.model("chartdata",chartdata)