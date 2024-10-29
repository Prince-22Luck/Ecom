// models/CartItem.js
const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 }
});

const CartModel = mongoose.model("CartItem", cartItemSchema);
module.exports = CartModel;
