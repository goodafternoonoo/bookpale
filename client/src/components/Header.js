import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                {' '}
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>로고입니다</Navbar.Brand>
                    </Link>
                    <Nav className='me-auto'>
                        <Nav.Link href='#'>문학</Nav.Link>
                        <Nav.Link href='#'>비문학</Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Link to='/menu'>
                            <Nav.Link href='/menu'>메뉴</Nav.Link>
                        </Link>
                        <Link to='/cart'>
                            <Nav.Link href='/cart'>장바구니</Nav.Link>
                        </Link>
                        <Nav.Link href='#signin'>로그인</Nav.Link>
                        <Nav.Link href='#signup'>회원가입</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
