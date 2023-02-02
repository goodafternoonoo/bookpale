import styles from '../css/Order.module.css';
import png from '../js.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Order() {
    return (
        <div>
            <div className='container'>
                <h1 className='mt-3'>주문결제</h1>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto'>
                            <h4 className='mb-3'>배송지정보</h4>
                            <form className='validation-form' novalidate>
                                <div className='row'>
                                    <div className='mb-3'>
                                        <label for='name'>이름</label>
                                        <input type='text' className='form-control w-50' id='name' placeholder='홍길동' required />
                                        <div className='invalid-feedback'>이름을 입력해주세요.</div>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label for='email'>연락처</label>
                                    <input type='email' className='form-control' id='email' placeholder='010-1234-5678' required />
                                    <div className='invalid-feedback'>연락처를 입력해주세요.</div>
                                </div>
                                <div className='mb-3'>
                                    <label for='address'>주소</label>
                                    <input type='text' className='form-control' id='address' placeholder='서울특별시 강남구' required />
                                    <div className='invalid-feedback'>주소를 입력해주세요.</div>
                                </div>
                                <div className='mb-3'>
                                    <label for='address2'>
                                        상세주소<span className='text-muted'></span>
                                    </label>
                                    <input type='text' className='form-control' id='address2' placeholder='상세주소를 입력해주세요.' />
                                </div>
                                <div className='mb-4'></div>
                            </form>
                        </div>
                    </div>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto d-flex flex-column justify-content-between'>
                            <h4 className='mb-3'>결제정보</h4>
                            <div className='d-flex flex-column align-items-end'>
                                <div className='col-md-4 mb-3 d-flex justify-content-between'>
                                    <label for='name'>주문상품</label>
                                    <span>물품 / 수량</span>
                                </div>
                                <div className='col-md-4 mb-3 d-flex justify-content-between'>
                                    <label for='name'>상품총액</label>
                                    <span>수량 * 가격</span>
                                </div>
                                <div className='col-md-4 mb-3 d-flex justify-content-between'>
                                    <label for='name'>배송비</label>
                                    <span>배송가격</span>
                                </div>
                            </div>
                            <div className='mb-4'></div>
                            <div className='text-center'>
                                <Link to='/complete'>
                                    <Button className='w-75' size='lg'>
                                        결제하기
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
