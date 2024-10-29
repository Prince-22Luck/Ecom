const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({

  part_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true,
    min:1,
  },
  revenue: {
    type: Number,
    required: true,
    min:0,
  },
  image:{
    type:String,
    required:true,
  },
  month: {
    type: Date,
    required: true,
  },
});

const SalesModel = mongoose.model("sales",salesSchema);

module.exports = SalesModel;
