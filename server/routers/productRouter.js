const { Router } = require('express');
const router = Router();
const Product = require('../db/schemas/Product');

//상품 조회
router.get('/' ,async(req,res)=>{
  try{
    const products = await Product.find({});
    res.send(products);
  }catch(err){
    console.error(err);
    res.send("상품 조회가 실패하였습니다.");
  }
});

module.exports = router;