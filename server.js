const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// temporary storage (works on Render)
let orders = [];

// home route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// save order
app.post("/order", (req, res) => {
  orders.push(req.body);
  console.log("Order saved:", req.body);

  res.json({ message: "Order saved successfully" });
});

// get orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});