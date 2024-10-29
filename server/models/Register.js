// const mongoose = require('mongoose')

// const Customerschema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password: String
// })

// const CustomerModel = mongoose.model("auths",Customerschema)

// module.export = CustomerModel

const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const CustomerModel = mongoose.model("auths", CustomerSchema);

module.exports = CustomerModel;
