import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import DaumPostCode from 'react-daum-postcode';

import Modal from '../components/Modal.js';

export default function Category() {
    function handleClick(e) {
        const categoryName = document.querySelector('#categoryName').value;

        if (!categoryName) return alert('카테고리 이름을 입력해주세요.');

        axios.post(`http://localhost:3001/category`, { categoryName }).then((response) => {
            alert('카테고리가 추가되었습니다.');
            document.querySelector('#frm').reset();
        });
    }

    return (
        <div>
            <div className='container'>
                <h1 className='mt-3'>카테고리 추가</h1>
                <hr />
                <div className='d-flex justify-content-center'>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto'>
                            <h4 className='mb-3'>카테고리 정보</h4>
                            <Form id='frm' className='validation-form'>
                                <div className='mb-3'>
                                    <label htmlFor='name'>카테고리 이름</label>
                                    <Form.Control type='text' id='categoryName' name='categoryName' placeholder='철학' defaultValue={''} />
                                    <div className='invalid-feedback'>카테고리 이름을 입력해주세요.</div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email'>카테고리 설명</label>
                                    <Form.Control type='email' placeholder='공시생을 위한 추천 도서!' required />
                                    <div className='invalid-feedback'>카테고리 설명을 입력해주세요.</div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email'>카테고리 테마</label>
                                    <Form.Select>
                                        <option>봄</option>
                                        <option>여름</option>
                                        <option>가을</option>
                                        <option>겨울</option>
                                    </Form.Select>
                                    <div className='invalid-feedback'>카테고리 설명을 입력해주세요.</div>
                                </div>
                                <div className='mb-4'></div>
                                <div className='text-center'>
                                    <Button onClick={handleClick} className='w-100'>
                                        저장
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
