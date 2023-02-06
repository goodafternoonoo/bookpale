//product 신규 작성

const { ProductModel } = require("../schemas/Product");

class Product {
  static async create({ newProduct }) {
    const createNewProduct = await ProductModel.create(newProduct);
    return createNewProduct;
  }
}

module.exports = { Product };