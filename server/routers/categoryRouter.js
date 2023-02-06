const { Router } = require('express');
const router = Router();
const Category = require('../db/schemas/Category');


//GET방식 http://localhost:3000/categories 요청 - 카테고리 조회
router.get('/' ,async(req,res,next)=>{
  try{
    const categories = await Category.find({});
    //Category스키마의 모든 데이터를 조회
    res.send(categories);
    // const data=categories.map((item)=>{return item.categoryname});
    // res.send(data);
  }catch(err){
    console.error(err);
    res.send("조회 실패");
  }
});

//POST방식 http://localhost:3000/categories 요청 - 카테고리 생성
router.post('/', async (req, res, next) => {
  const { categoryname } = req.body;
  try{
    const categories = await Category.create({
      categoryname:categoryname,
    });
    res.send("create 성공");
    console.log(categories);
  }catch(err){
    console.error(err);
    res.send("create 실패");
  }
});

//PUT방식 http://localhost:3000/categories/:categoryId 요청 - 카테고리 수정
router.put('/:categoryId',async(req,res,next)=>{
  const {categoryId} = req.params;
  const {newcategoryname} = req.body;
  try{
    await Category.findByIdAndUpdate(categoryId,{
      categoryname:newcategoryname,
    });
    res.redirect('/categories');

  }catch(err){
    console.error(err);
    res.send("update 실패");
  }
})

//DELETE방식 http://localhost:3000/categories/:categoryId 요청 - 카테고리 삭제
router.delete('/:categoryId',async(req,res,next)=>{
  const {categoryId} = req.params;
  try{
    await Category.findByIdAndDelete(categoryId);
    res.redirect('/categories');

  }catch(err){
    console.error(err);
    res.send("delete 실패");
  }
})

module.exports = router;