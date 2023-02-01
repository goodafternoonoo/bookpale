import React from 'react'
import png from '../js.png';
import '../css/Cart.css'
import { Button } from 'react-bootstrap';

export default function Cart() {
    return (
        <section className='cart-section'>
            <div className='cart-container'>
                <h1>장바구니</h1>
                <h6> → &nbsp; 주문 &nbsp; → &nbsp; 주문완료 </h6>
                <hr />
                <div className='cart-main'>
                    <div className='cart-list'>
                        <div className='cart-product-container'>
                            <div className='cart-product-header'>
                                <label className='checkbox'>
                                    <input type='checkbox' id='allSelectCheckbox' />
                                    <p className='help'>전체선택</p>
                                </label>
                                <label className='seperator'>
                                    <p className='help-seperator'> &nbsp;&nbsp; | &nbsp;&nbsp;</p>
                                </label>
                                <label className='delete-part'>
                                    <p className='help'>선택삭제</p>
                                </label>
                            </div>
                            <div className='cart-product-item'>
                                <label className='checkbox'>
                                    <input type='checkbox' id='SelectCheckbox' />
                                </label>
                                <figure className='product-image'>
                                    <img id='' src={png} alt=''></img>
                                </figure>
                                <div className='product-content'>
                                    <p className='productName'>책 제목</p>
                                    <div className='quantity'>
                                        <button className='minus'>-</button>
                                        <input className='input-quentity' type='number' min='1' max='99' value='1'></input>
                                        <button className='plus'>+</button>
                                    </div>
                                </div>
                                <div className='calculation'>
                                    <p id='productPrice'>35,000원</p>
                                    <p id='multifly'>×</p>
                                    <p id='updatedQuantity'>2개</p>
                                    <p id='equal'>=</p>
                                    <p id='totalPrice'>70,000원</p>
                                </div>
                                <button className='delete-button'>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart-summary'>
                    <div className='cart-order-summary'>
                        <div className='cart-order-header'>
                            <p>결제정보</p>
                        </div>
                        <div className='cart-order-info'>
                            <div className='info'>
                                <p>상품수</p>
                                <p id='productsCount'>1개</p>
                            </div>
                            <div className='info'>
                                <p>배송비</p>
                                <p id='deliveryFee'>3,000원</p>
                            </div>
                            <div className='total'>
                                <p>총 결제금액</p>
                                <p id='totalPrice'>73,000원</p>
                            </div>
                            <div className='purchase'>
                                <Button className='purchaseButton'>결제하기</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}