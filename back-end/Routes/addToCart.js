const router = require("express").Router();
const userDetail = require("../model/userDetail");
const fs = require("fs");

router.post("/", async (req, res) => {
  const { id, email, quantity = 1 } = req.body;
  const allUser = await userDetail.find();
  const user = allUser.find((user) => email === user.Email);
  const file = fs.readFileSync("public/products.json", "utf-8");
  const arrFile = JSON.parse(file);
  const product = arrFile.find((prod) => id === prod.id);
  product.quantity = quantity;

  // console.log(user.Name, product);

  const isAlreadyAvailable = await user.Cart.find((pId) => pId.id == id);

  if (!isAlreadyAvailable) {
    const update = await userDetail.updateOne(
      { Email: email },
      { $push: { Cart: product } },
    );
    console.log(update);
    res.json({ msg: "Added" });
  } else {
    const update = await userDetail.findOneAndUpdate(
      {
        Email: email,
        "Cart.id": id,
      },
      {
        $set: {
          "Cart.$.quantity": quantity,
        },
      },
    );
    console.log(update);
    res.json({ msg: "Updated quantity" });
  }
});

module.exports = router;
