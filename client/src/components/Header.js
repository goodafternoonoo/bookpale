import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                {' '}
                <Container>
                    <Navbar.Brand href='#home'>로고입니다</Navbar.Brand>
                    <Nav className='me-auto' style={{justifyContent:'flex-end'}}>
                        <Nav.Link href='#shoppingcart'>장바구니</Nav.Link>
                        <Nav.Link href='#signin'>로그인</Nav.Link>
                        <Nav.Link href='#signup'>회원가입</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
