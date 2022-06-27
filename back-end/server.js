const express = require("express");
const app = express();
const cors = require("cors");
const signupPage = require("./Routes/signup");
const loginPage = require("./Routes/login");
const mongoose = require("mongoose");
const userDetails = require("./model/userDetail");
const User = require("./Routes/User");
const getProducts = require("./Routes/getProducts");
const addToCart = require("./Routes/addToCart");
const getUserData = require("./Routes/getUserData");
const deleteCartItem = require("./Routes/deleteCartItem");
require("dotenv").config();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// ROUTES
app.use("/signup", signupPage);
app.use("/login", loginPage);
app.use("/user", User);
app.use("/getProducts", getProducts);
app.use("/addToCart", addToCart);
app.use("/getUserData", getUserData);
app.use("/deleteCartItem", deleteCartItem);
app.get("/deleteall", (req, res) => {
  userDetails.collection.deleteMany({});
  res.send("Deleted");
});

// Database connection
mongoose.connect(
  process.env.DATABASE_URI,
  () => {
    console.log("Connected to database");
  },
  (e) => console.log(e),
);

// PORT
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
