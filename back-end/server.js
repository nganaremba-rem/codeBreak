const express = require("express");
const app = express();
const cors = require("cors");
const signupPage = require("./Routes/signup");
const loginPage = require("./Routes/login");
const mongoose = require("mongoose");
const userDetails = require("./model/userDetail");
require("dotenv").config();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
// ROUTES
app.use("/signup", signupPage);
app.use("/login", loginPage);

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
