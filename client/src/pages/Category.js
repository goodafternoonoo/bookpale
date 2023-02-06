import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

import Styles from '../css/Category.module.css';
import Modal from '../components/Modal.js';

import { AppContext } from '../App';

export default function Category() {
    const [categoryNameInput, setCategoryNameInput] = useState('');
    const { categories, setCategories } = useContext(AppContext);
    const [changeName, setChangeName] = useState('');

    async function handleClickCreate(e) {
        e.preventDefault();
        if (!categoryNameInput) return alert('카테고리 이름을 입력해주세요.');

        await axios.post(`http://localhost:3001/category`, { categoryName: categoryNameInput }).then(() => {
            alert('카테고리가 추가되었습니다.');
            document.querySelector('#frm').reset();
        });

        await axios.get(`http://localhost:3001/category`, { categoryNameInput }).then((response) => {
            setCategories(response.data);
        });
    }

    function handleClickUpdate(id, event) {
        event.preventDefault();
        if (window.confirm('카테고리를 수정하시겠습니까?')) {
            axios.put(`http://localhost:3001/category/${id}`, { categoryName: changeName }).then(() => {
                alert('카테고리가 수정되었습니다.');
                let copy = [...categories];
                copy.map((item) => {
                    if (item.id === id) {
                        item.categoryName = changeName;
                    }
                });
                setCategories([...copy]);

                document.querySelector('.btn-close').click();
            });
        }
    }

    function handleClickDelete(id) {
        if (window.confirm('카테고리를 삭제하시겠습니까?')) {
            axios.delete(`http://localhost:3001/category/${id}`).then(() => {
                alert('카테고리가 삭제되었습니다.');
                setCategories(categories.filter((item) => item.id != id));
            });
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/category`, { categoryNameInput }).then((response) => {
            setCategories(response.data);
        });
    }, []);

    return (
        <div>
            <Container>
                <h1 className='mt-3'>카테고리 추가</h1>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div className='input-form-backgroud row mb-5 w-50'>
                        <div className='input-form col-md-12 mx-auto'>
                            <h4 className='mb-3'>카테고리 정보</h4>
                            <Form id='frm' className='validation-form' onSubmit={handleClickCreate}>
                                <div className='mb-3'>
                                    <label htmlFor='categoryNameInput'>카테고리 이름</label>
                                    <Form.Control type='text' id='categoryNameInput' name='categoryNameInput' placeholder='철학' onChange={(e) => setCategoryNameInput(e.target.value)} />
                                    <div className='invalid-feedback'>카테고리 이름을 입력해주세요.</div>
                                </div>
                                <div className='mb-4'></div>
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
                                                    <Form.Control className='w-75 d-inline-block' onChange={(e) => setChangeName(e.target.value)} />
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
