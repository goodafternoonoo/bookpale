import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DaumPostCode from 'react-daum-postcode';

import Modal from '../components/Modal.js';

export default function Order() {
    const location = useLocation();
    const { book } = location.state;

    const [user, setUser] = useState({});
    const [zipCode, setZipcode] = useState('');
    const [address, setAddress] = useState('');

    //추후 토큰으로 로그인 된 계정의 id값을 이용하여 회원 정보를 조회 현재는 임시 데이터 바인딩
    useEffect(() => {
        axios.get('http://localhost:3001/users/1').then((response) => {
            setUser(response.data);
            setZipcode(response.data.address.zipCode);
            setAddress(response.data.address.address1);
        });
    }, []);

    const handle = {
        selectAddress: (data) => {
            console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);

            setZipcode(data.zonecode);
            setAddress(data.address);

            document.querySelector('.btn-close').click();
        },
    };

    return (
        <div>
            <div className='container'>
                <h1 className='mt-3'>주문결제</h1>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto'>
                            <h4 className='mb-3'>배송지정보</h4>
                            <form className='validation-form'>
                                <div className='mb-3'>
                                    <label htmlFor='name'>이름</label>
                                    <input type='text' className='form-control' id='name' placeholder='홍길동' defaultValue={user.name} required />
                                    <div className='invalid-feedback'>이름을 입력해주세요.</div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email'>연락처</label>
                                    <input type='email' className='form-control' id='email' placeholder='010-1234-5678' required />
                                    <div className='invalid-feedback'>연락처를 입력해주세요.</div>
                                </div>
                                <div className='row'>
                                    <div className='mb-3 col-md-6'>
                                        <label htmlFor='address2'>
                                            우편번호<span className='text-muted'></span>
                                        </label>
                                        <input type='text' className='form-control' id='address2' placeholder='상세주소를 입력해주세요.' defaultValue={zipCode} />
                                    </div>
                                    <div className='mb-3 col-md-6'>
                                        <label htmlFor='address2'>
                                            <span className='text-muted'></span>
                                        </label>
                                        <Modal title='주소 찾기' className='d-block col-md-12'>
                                            <DaumPostCode onComplete={handle.selectAddress} autoClose={false} />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='mb-3 col-md-7'>
                                        <label htmlFor='address'>주소</label>
                                        <input type='text' className='form-control' id='address' placeholder='서울특별시 강남구' defaultValue={address} required />
                                        <div className='invalid-feedback'>주소를 입력해주세요.</div>
                                    </div>
                                    <div className='mb-3 col-md-5'>
                                        <label htmlFor='address2'>
                                            상세주소<span className='text-muted'></span>
                                        </label>
                                        <input type='text' className='form-control' id='address2' placeholder='상세주소를 입력해주세요.' defaultValue={user.address?.address2} />
                                    </div>
                                </div>
                                <div className='mb-4'></div>
                            </form>
                        </div>
                    </div>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto d-flex flex-column justify-content-between'>
                            <h4 className='mb-3'>결제정보</h4>
                            <div className='d-flex flex-column align-items-end'>
                                <div className='col-md-12 mb-3 d-flex justify-content-between'>
                                    <label htmlFor='name'>주문상품</label>
                                    <span>{book.title} / 1개</span>
                                </div>
                                <div className='col-md-12 mb-3 d-flex justify-content-between'>
                                    <label htmlFor='name'>상품총액</label>
                                    <span>{Number(book.price).toLocaleString()}원</span>
                                </div>
                                <div className='col-md-12 mb-3 d-flex justify-content-between'>
                                    <label htmlFor='name'>배송비</label>
                                    <span>3,000원</span>
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
