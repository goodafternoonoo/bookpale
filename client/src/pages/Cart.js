import React from 'react';
import png from '../js.png';
import { Button } from 'react-bootstrap';
import styles from '../css/Cart.module.css';

export default function Cart() {
    return (
        <div className= {(styles['cartContainer'])}>
            {/* 장바구니 상단 이름 */}
            <div className= {(styles['cartHeader'])}>
                <h1>장바구니</h1>
                <h6> → &nbsp; 주문 &nbsp; → &nbsp; 주문완료 </h6>
                <hr />
            </div>

            <div className= {(styles['cartBody'])}>
                {/* 장바구니 메인 페이지 */}
                <div className= {(styles['cartList'])}>
                    {/* 장바구니 상단 체크박스 */}
                    <div className= {(styles['cartCheck'])}>
                        <input type='checkbox' id='allSelectCheckbox' />
                        <label className= 'help'>&nbsp; 전체선택 &nbsp; | &nbsp; 선택삭제</label>
                        <hr />
                    </div>

                    {/* 장바구니 리스트 모음 */}
                    <div className= {(styles['cartItems'])}>
                        <input type='checkbox' id='SelectCheckbox' />
                        <img id='' src={png} alt=''></img>
                        <div className= {(styles['productContent'])}>
                            <h4 className= {(styles['productName'])}>책 제목</h4>
                            <input className= {(styles['productQuentity'])} type='number' min='1' max='99' value='1'></input>
                        </div>
                        <div className= {(styles['calculation'])}>
                            <p id='productPrice'>35,000원</p>
                            <p id='multifly'>×</p>
                            <p id='updatedQuantity'>2개</p>
                            <p id='equal'>=</p>
                            <p id='totalPrice'>70,000원</p>
                        </div>
                        <button className= {(styles['deleteButton'])}>삭제</button>
                    </div>
                </div>

                {/* 장바구니 요약 */}
                <div className= {(styles['cartSummary'])}>
                    <h4>결제정보</h4>
                    <hr />
                    <div className= {(styles['summaryInfo'])}>
                        <p>상품수</p>
                        <p id='productsCount'>1개</p>
                    </div>
                    <div className= {(styles['summaryInfo'])}>
                        <p>배송비</p>
                        <p id='deliveryFee'>3,000원</p>
                    </div>
                    <hr />
                    <div className= {(styles['totalInfo'])}>
                        <h4>총 결제금액</h4>
                        <h4 id='totalPrice'>73,000원</h4>
                    </div>
                    <div></div>
                    <div className='text-center'>
                        <Button className='w-75' size='lg'>결제하기</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
