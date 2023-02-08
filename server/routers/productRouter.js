import { Router } from 'express';
import Product from '../db/schemas/Product.js'

const productRouter = Router();

//상품 조회
productRouter.get('/' ,async(req,res)=>{
  try{
    const products = await Product.find({});
    res.send(products);
  }catch(err){
    console.error(err);
    res.send("상품 조회가 실패하였습니다.");
  }
});

// import 모듈  미사용 
export default productRouter;