import React, { useEffect, useState } from 'react';
import axios from 'axios';
import png from '../js.png';
import { Button } from 'react-bootstrap';
import styles from '../css/Cart.module.css';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();

    //{/* 도서 수량 값 세팅 */}
    const [books, setBooks] = useState(1);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/carts/userId').then((response) => {
            setCarts(response.data.cart);
            console.log(response.data.cart);
        });
    }, []);

    function increaseBooks() {
        setBooks(books + 1);
    }

    function decreaseBooks() {
        setBooks(books - 1);
    }

    //{/* 결제하기 페이지 넘기기 */}
    function ClickOrder(e) {
        e.preventDefault();
        navigate('/order');
    }

    return (
        <div className={styles['cartContainer']}>
            {/* 장바구니 상단 이름 */}
            <div className={styles['cartHeader']}>
                <h1>장바구니</h1>
                <h6> &nbsp; → &nbsp; 주문 &nbsp; → &nbsp; 주문완료 </h6>
                <hr />
            </div>

            {/* 상자 디자인들 부트스트랩 변경 */}
            <div className={styles['cartBody']}>
                {/* 장바구니 메인 페이지 */}
                {/* 장바구니 내역들 요소들 칸 조정 예정 */}
                <div className={styles['cartList']}>
                    {/* 장바구니 전체선택 체크박스 */}
                    <div className={styles['cartCheck']}>
                        <input type='checkbox' id='allSelectCheckbox' />
                        {/* 선택 시 장바구니 속 모든 상품 체크박스 체크되도록 추가 예정 */}
                        <label>&nbsp; 전체선택 &nbsp; | &nbsp;</label>
                        {/* 선택삭제 기능 추가 예정 */}
                        <label>선택삭제</label>
                        <hr />
                    </div>

                    {/* 장바구니 리스트 모음 */}
                    {/* 장바구니 내역 업데이트 될 때마다 상품 리스트 추가되도록 변경 예정 */}
                    {carts &&
                        carts.map((cart) => {
                            return (
                                <div className={styles['cartItems']}>
                                    {/* 체크박스 하나씩 인식할 수 있도록 기능 추가 */}
                                    <input type='checkbox' id='SelectCheckbox' />
                                    <img id='' src={png} alt=''></img>
                                    <div className={styles['productContent']}>
                                        <h4 className={styles['productName']}>{cart.bookName}</h4>
                                        {/* 도서 수량 최소 1권 이상 99권 이하로 지정될 수 있도록 변경 예정 */}
                                        {/* 버튼/div 한 줄로 배치 변경 예정 */}
                                        <div className='productQuentity'>
                                            <button onClick={decreaseBooks}>-</button>
                                            <div>{books}</div>
                                            <button onClick={increaseBooks}>+</button>
                                        </div>
                                    </div>

                                    {/* 요소들 한 줄로 배열 변경 예정 */}
                                    <div className={styles['calculation']}>
                                        {/* 상품 가격 받아오는 가격으로 변경 예정 */}
                                        <p id='productPrice'>{Number(cart.price).toLocaleString()}원</p>
                                        <p id='multifly'>×</p>
                                        <p id='updatedQuantity'>{Number(cart.amount).toLocaleString()}개</p>
                                        <p id='equal'>=</p>
                                        {/* price * Quantity 로 변경 예정 */}
                                        <p id='totalPrice'>{(Number(cart.price) * Number(cart.amount)).toLocaleString()}원</p>
                                    </div>
                                    <button className={styles['deleteButton']}>삭제</button>
                                </div>
                            );
                        })}
                </div>

                {/* 장바구니 요약 */}
                {/* 상자 디자인들 부트스트랩 변경 */}
                <div className={styles['cartSummary']}>
                    <h4>결제정보</h4>
                    <hr />
                    {/* 총 상품 개수 업데이트 되도록 변경 예정 */}
                    <div className={styles['summaryInfo']}>
                        <p>상품수</p>
                        <p id='productsCount'>{carts.length}개</p>
                    </div>

                    <div className={styles['summaryInfo']}>
                        <p>배송비</p>
                        <p id='deliveryFee'>3,000원</p>
                    </div>
                    <hr />

                    {/* 결제 금액 업데이트되도록 변경 예정 */}
                    <div className={styles['totalInfo']}>
                        <h4>총 결제금액</h4>
                        <h4 id='totalPrice'>
                            {carts
                                .reduce((a, b) => {
                                    return a + Number(b.price * b.amount);
                                }, 0)
                                .toLocaleString()}
                            원
                        </h4>
                    </div>
                    <div className='text-center'>
                        {/* 버튼 누르면 그냥 하얀 화면이 뜸 */}
                        {/* 장바구니 상품이 없으면 '결제할 상품이 없습니다' 뜰 수 있도록 변경 예정 */}
                        {/* 총액과 버튼 간 간격 조정 예정*/}
                        <Button className='w-75' size='lg' onClick={ClickOrder}>
                            결제하기
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
