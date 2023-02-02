import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function Header() {
  const navagite = useNavigate();
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
                        <Nav.Link href='#'>문학</Nav.Link>
                        <Nav.Link href='#'>비문학</Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>
                      {/* 링크 태그를 감싸는  */}
                        <Nav.Link onClick={() => navagite('/menu')}>메뉴</Nav.Link>
                        <Nav.Link onClick={() => navagite('/cart')}>장바구니</Nav.Link>
                        <Nav.Link onClick={() => navagite('/signin')}>로그인</Nav.Link>
                        <Nav.Link onClick={() => navagite('/signup')}>회원가입</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
