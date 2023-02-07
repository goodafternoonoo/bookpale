import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { AppContext } from '../App';

export default function Header() {
    const navigate = useNavigate();

    const { categories, setCategories } = useContext(AppContext);

    useEffect(() => {
        axios.get(`http://localhost:3001/category`).then((response) => {
            setCategories(response.data);
        });
    }, []);

    return (
        <>
            <Navbar bg='dark' variant='dark'>
                {' '}
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>로고입니다</Navbar.Brand>
                    </Link>
                    <Nav className='me-auto'>
                        {/* 각 카테고리별 페이지 링크도 navagite로 바꿔줄것  */}
                        {categories.map((category) => {
                            // 추후 id값을 이용한 동적 url 추가
                            return (
                                <Nav.Link key={category.id} onClick={() => navigate(`/categoryDisplay/${category.id}`)}>
                                    {category.categoryName}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                    <Nav className='justify-content-end'>
                        {/* 링크 태그를 감싸는  */}
                        <Nav.Link onClick={() => navigate('/adminMenu')}>관리자 메뉴</Nav.Link>
                        <Nav.Link onClick={() => navigate('/menu')}>메뉴</Nav.Link>
                        <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
                        <Nav.Link onClick={() => navigate('/signin')}>로그인</Nav.Link>
                        <Nav.Link onClick={() => navigate('/signup')}>회원가입</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
