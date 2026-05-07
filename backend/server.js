const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/meesho-clone")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ✅ Schema (structure)
const OrderSchema = new mongoose.Schema({
  productId: Number,
  name: String,
  address: String,
  phone: String
});

// ✅ Model
const Order = mongoose.model("Order", OrderSchema);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// ✅ Save order
app.post("/order", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    console.log("Saved to DB:", order);

    res.json({ message: "Order saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving order" });
  }
});

// ✅ ADD HERE 👇
app.get("/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});