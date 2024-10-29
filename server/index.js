const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();

const CustomerModel = require("./models/Register.js");
const ProductModel = require("./models/products.js");
const SalesModel = require("./models/Sales.js");

const cartRoutes = require("./routes/cart");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


try {
  const con = mongoose.connect("mongodb://127.0.0.1:27017/mini_project");
  console.log("connected");
} catch (e) {
  console.log(e);
}

app.post("/cartItems", async (req, res) => {
  const { name,price, description, category, image } = req.body;

  try {
    let user = await ProductModel.find();
    console.log({name});

    user = new ProductModel({
      name,
      price,
      description,
      category,
      image,
    });
    await user.save();
    console.log("Hey stored successfully")

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await CustomerModel.findOne({ email });
    if (user) {
      console.log("User Already exists");
      return res.status(400).json({ msg: "User already exists" });
    } else {
      user = new CustomerModel({
        name,
        email,
        password,
      });
      await user.save();

      res.status(201).json({ msg: "User registered successfully" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    // Find user by email
    let user = await CustomerModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check if password matches (assuming it's hashed)

    if (password != user.password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // If login successful
    res.json({ success: true, msg: "Login successful" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch data" });
  }
});

app.get("/api/sales", async (req, res) => {
  try {
    const sales = await SalesModel.find();
    res.json(sales);
  } catch (e) {
    res.json({ err: "Sales data fetching error" });
    console.log("Sales data fetching error");
  }
});

app.get("/api/sales/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const salesData = await SalesModel.find({ Category: category });
    res.json(salesData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching sales data" });
  }
});

app.get("/api/barchart", async (req, res) => {
  try {
    const salesData = await SalesModel.aggregate([
      {
        $group: {
          _id: "$Category",  // Group by Category
          Revenue: { $sum: "$Revenue" },  // Sum up the revenue for each category
        },
      },
    ]);

    const formattedSalesData = salesData.map((item) => ({
      Category: item._id,  
      revenue: item.Revenue, 
    }));

    res.json(formattedSalesData);
    console.log(formattedSalesData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching sales data" });
  }
});


app.get("/api/piechart", async (req, res) => {
  try {
    const salesData = await SalesModel.aggregate([
      {
        $group: {
          _id: "$Category", 
          unitsSold: { $sum: "$Units_Sold" }, 
        },
      },
    ]);

    const formattedSalesData = salesData.map((item) => ({
      Category: item._id, 
      unitsSold: item.unitsSold, 
    }));

    res.json(formattedSalesData);
    console.log(formattedSalesData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching sales data" });
  }
});


app.get("/api/areachart", async (req, res) => {
  try {
    const salesData = await SalesModel.aggregate([
      {
        $group: {
          _id: { $month: "$Month" }, 
          unitsSold: { $sum: "$Units_Sold" }, 
        },
      },
      { $sort: { "_id": 1 } }, 
    ]);


    const formattedSalesData = salesData.map((item) => ({
      month: item._id, 
      unitsSold: item.unitsSold,
    }));

    res.json(formattedSalesData);
    console.log(formattedSalesData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching sales data" });
  }
});



app.get("/api/line",async (req, res) => {
  try {

    const salesData = await SalesModel.aggregate([
      {
        $group: {
          _id: { month: { $month: "$Month" } }, // Extract month from date field
          totalRevenue: { $sum: "$Revenue" },   // Sum revenue for each month
        },
      },

      { $sort: { "_id.month": 1 } },
    ]);

    const formattedSalesData = salesData.map((item) => ({
      month: item._id.month,    
      revenue: item.totalRevenue,
    }));

    res.json(formattedSalesData);
  } catch (err) {
    console.error("Error fetching sales data:", err);
    res.status(500).json({ message: "Error fetching sales data" });
  }
})

app.use('/api/cart', cartRoutes);


app.get('/api/hello', async (req, res) => {
  try {
    const salesData = await SalesModel.find({}); // Fetch all sales data
    res.json(salesData);
  } catch (err) {
    console.error('Error fetching sales data:', err);
    res.status(500).json({ message: 'Error fetching sales data' });
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
