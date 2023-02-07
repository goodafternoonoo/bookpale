const { Router } = require('express');
const router = Router();
const Order = require('../db/schemas/Order');

router.post('/', async (req, res, next) => {
    res.send("주문추가(신규주문)");
});
  

//관리자기능 - 주문 전체내역 조회
router.get('/', async (req, res, next) => {
    try{
        const orders = await Order.find({});
        res.send(orders);
    } catch(err){
        console.error(err);
        res.send("주문 조회가 실패하였습니다.");
    }
});

//관리자, 유저기능
//관리자면 선택한 id와 동일한 id주문 확인.
//회원이면 회원 id와 동일한 id내역 확인.(조건 넣어야함)
router.get('/:orderId', async (req, res, next) => {
    try{
        const orders = await Order.find({});
        res.send(orders, `주문 상세내역(특정${orderId}유저) 확인`);
    } catch(err){
        console.error(err);
        res.send("조회할 주문이 없습니다.");
    }
});


router.put('/:orderId', async (req, res, next) => {
    res.send("주문수정");
});

//관리자기능
router.put('/:orderId', async (req, res, next) => {
    res.send("주문상태변경(배송중)");
});


//유저 body: {status: DELETE}
router.put('/:orderId/status', async (req, res, next) => {
    res.send("주문내역취소");
});


//관리자 기능
router.delete('/:orderId', async (req, res, next) => {
    res.send("주문삭제");
});



module.exports = router;