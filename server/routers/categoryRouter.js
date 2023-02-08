// express에서 Router로 지정을 하면 express만 불러오고 라우트요청이 가능한가요?
import express from 'express';
import category from '../db/schemas/category.js';

const categoryRouter = express.Router();

//GET방식 http://localhost:3000/categories 요청 - 카테고리 조회
categoryRouter.get('/', async (req, res, next) => {
    try {
        const categories = await Category.find({});
        //Category스키마의 모든 데이터를 조회
        res.send(categories);
        // const data=categories.map((item)=>{return item.categoryname});
        // res.send(data);
    } catch (err) {
        console.error(err);
        res.send('조회 실패');
    }
});

//POST방식 http://localhost:3000/categories 요청 - 카테고리 생성
categoryRouter.post('/', async (req, res, next) => {
    const { categoryname } = req.body;
    try {
        const categories = await Category.create({
            categoryname: categoryname,
        });
        res.send('create 성공');
        console.log(categories);
    } catch (err) {
        console.error(err);
        res.send('create 실패');
    }
});

//PUT방식 http://localhost:3000/categories/:categoryId 요청 - 카테고리 수정
categoryRouter.put('/:categoryId', async (req, res, next) => {
    const { categoryId } = req.params;
    const { newcategoryname } = req.body;
    try {
        await Category.findByIdAndUpdate(categoryId, {
            categoryname: newcategoryname,
        });
        res.redirect('/categories');
    } catch (err) {
        console.error(err);
        res.send('update 실패');
    }
});

//DELETE방식 http://localhost:3000/categories/:categoryId 요청 - 카테고리 삭제
categoryRouter.delete('/:categoryId', async (req, res, next) => {
    const { categoryId } = req.params;
    try {
        await Category.findByIdAndDelete(categoryId);
        res.redirect('/categories');
    } catch (err) {
        console.error(err);
        res.send('delete 실패');
    }
});

// import문에서 외부로 가져다 쓰려면 리액트처럼 export default
export default categoryRouter;
