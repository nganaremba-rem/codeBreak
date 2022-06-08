const express = require("express");
const router = express.Router();
const userDetails = require("../model/userDetail");
const bcrypt = require("bcrypt");

// router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post("/", async (req, res) => {
  console.log(req.body);
  const hashPassword = await bcrypt.hash(req?.body?.password ?? "", 10);
  try {
    const user = await userDetails.create({
      Name: req.body.name,
      Email: req.body.email,
      Address: req.body.address,
      PhoneNo: req.body.phone,
      Password: hashPassword,
    });
    res.status(201).send("Created");
  } catch (e) {
    res.status(409).send(e.message);
  }
});

module.exports = router;
