import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

import Styles from '../css/Category.module.css';
import Modal from '../components/Modal.js';

import { AppContext } from '../App';

{/* 로직 수정 예정 */}

export default function ProductEdit(){
    const [productNameInput, setProductNameInput] = useState('');
    const { books, setBooks } = useContext(AppContext);
    const { categories, setCategories } = useContext(AppContext);
    const [changeProductName, setChangeProductName] = useState('');
    // const [publisherInput, setPublisherInput] = useState('');
    // const [changePublisherInput, setChangePublisherInput] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [changeShortDescription, setChangeShortDescription] = useState('');
    const [detailDescription, setDetailDescription] = useState('');
    const [changeDetailDescription, setChangeDetailDescription] = useState('');
    // const [stock, setStock] = useState(0);
    // const [changeStock, setChangeStock] = useState(0);
    const [price, setPrice] = useState(10000);
    const [changePrice, setChangePrice] = useState(10000);

    async function handleClickCreate(e) {
        e.preventDefault();
        if (!productNameInput) return alert('항목을 입력해주세요.');

        await axios.post(`http://localhost:3001/detail`, { productName: productNameInput }).then(() => {
            alert('제품이 추가되었습니다.');
            document.querySelector('#frm').reset();
        });

        await axios.get(`http://localhost:3001/detail`, { productNameInput }).then((response) => {
            setBooks(response.data);
        });
    }

    function handleClickUpdate(id, event) {
        event.preventDefault();
        if (window.confirm('제품을 수정하시겠습니까?')) {
            axios.put(`http://localhost:3001/detail/${id}`, { productName: changeProductName }).then(() => {
                alert('제품이 수정되었습니다.');
                let copy = [...books];
                copy.map((item) => {
                    if (item.id === id) {
                        item.productName = changeProductName;
                    }
                });
                setBooks([...copy]);

                document.querySelector('.btn-close').click();
            });
        }
    }

    function handleClickDelete(id) {
        if (window.confirm('제품을 삭제하시겠습니까?')) {
            axios.delete(`http://localhost:3001/detail/${id}`).then(() => {
                alert('제품이 삭제되었습니다.');
                setBooks(books.filter((item) => item.id !== id));
            });
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/detail`, { productNameInput }).then((response) => {
            setBooks(response.data);
        });
    }, []);

    return (
        <div>
            <Container>
                <h1 className='mt-3'>제품 관리</h1>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto'>
                            <h4 className='mb-3'>제품 정보</h4>
                            <Form id='frm' className='validation-form' onSubmit={handleClickCreate}>
                                <div className='mb-3'>
                                    <label htmlFor='productNameInput'>제품 이름</label>
                                    <Form.Control type='text' id='productNameInput' name='productNameInput' placeholder='프로그래밍 기초' onChange={(e) => setProductNameInput(e.target.value)} />
                                    <div className='invalid-feedback'>제품 이름을 입력해주세요.</div>
                                </div>
                                <div className='mb-4'></div>
                                <div className='mb-3'>
                                    <label htmlFor='categoryNameInput'>카테고리</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>카테고리를 선택해주세요.</option>
                                        <option value="1">철학</option>
                                        <option value="2">IT</option>
                                    </select>
                                    <div className='invalid-feedback'>카테고리를 선택해주세요.</div>
                                </div>
                                <div className='mb-4'></div>
                                {/* <div className='mb-3'>
                                    <label htmlFor='productNameInput'>출판사</label>
                                    <Form.Control type='text' id='productNameInput' name='productNameInput' placeholder='프로그래밍 기초' onChange={(e) => setProductNameInput(e.target.value)} />
                                    <div className='invalid-feedback'>제품 이름을 입력해주세요.</div>
                                </div>
                                <div className='mb-4'></div> */}
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">요약 설명</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="제품에 대한 1~2문장의 설명을 적어 주세요."></textarea>
                                </div>
                                <div className='mb-4'></div>
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">상세 설명</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="제품에 대한 상세 설명을 적어 주세요."></textarea>
                                </div>
                                <div className='mb-4'></div>
                                <div className='mb-3'>
                                    <label for="formFile" class="form-label">제품 사진</label>
                                    <input class="form-control" type="file" id="formFile" placeholder="사진파일 (png, jpg, jpeg)"></input>
                                </div>
                                <div className='mb-4'></div>
                                <div className='mb-3'>
                                    <label htmlFor='productNameInput'>재고 수</label>
                                    <Form.Control type='number' id='productNameInput' name='productNameInput' placeholder='10' onChange={(e) => setProductNameInput(e.target.value)} />
                                    <div className='invalid-feedback'>제품 이름을 입력해주세요.</div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='productNameInput'>가격</label>
                                    <Form.Control type='number' id='productNameInput' name='productNameInput' placeholder='10000' onChange={(e) => setProductNameInput(e.target.value)} />
                                    <div className='invalid-feedback'>제품 이름을 입력해주세요.</div>
                                </div>
                                <div className='text-center'>
                                    <Button onClick={handleClickCreate} className='w-100'>
                                        저장
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto'>
                            {categories.map((category) => {
                                return (
                                    <Row key={category.id} className={Styles.tr}>
                                        <Col>{category.categoryName}</Col>
                                        <Col>
                                            <Modal title='수정' className='btn-sm mx-1'>
                                                <Form onSubmit={(e) => handleClickUpdate(category.id, e)}>
                                                    <Form.Control className='w-75 d-inline-block' onChange={(e) => setChangeProductName(e.target.value)} />
                                                    <Button style={{ width: '20%', marginLeft: '5%' }} variant='secondary' size={'sm'} onClick={(e) => handleClickUpdate(category.id, e)}>
                                                        저장
                                                    </Button>
                                                </Form>
                                            </Modal>
                                            <Button variant='danger' size={'sm'} onClick={() => handleClickDelete(category.id)}>
                                                삭제
                                            </Button>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}