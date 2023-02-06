//product 신규 작성

const express = require("express");
const router = express.Router();

const { productService } = require("../services/userService");

//상품 등록
router.post("/product", async (req, res) => {
  try {
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;

    const newProduct = await productService.addProduct({
    //   name,
    //   email,
    //   password,
    });
    res.status(200).json(newaProduct);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = { productRouter };