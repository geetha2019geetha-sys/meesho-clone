const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🟢 temporary storage (IMPORTANT: resets when server restarts)
let orders = [];

// 🏠 home route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// 🟢 save order
app.post("/order", (req, res) => {
  const order = req.body;

  orders.push(order);

  console.log("Order saved:", order);

  res.json({
    message: "Order saved successfully",
    order
  });
});

// 🟢 get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

// 🚨 IMPORTANT FIX FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});