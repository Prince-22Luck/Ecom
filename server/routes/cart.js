const express = require("express");
const CartItem = require("../models/CartItems");
const router = express.Router();

// Add item to cart
router.post("/add", async (req, res) => {
  try {
    const { productId, name, price, image, quantity } = req.body;
    const existingCartItem = await CartItem.findOne({ productId });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      const newCartItem = new CartItem({ productId, name, price, image, quantity });
      await newCartItem.save();
    }

    res.status(201).json({ message: "Item added to cart!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

// Get all items in cart
router.get("/", async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// Remove item from cart
router.delete("/:id", async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item" });
  }
});

module.exports = router;
