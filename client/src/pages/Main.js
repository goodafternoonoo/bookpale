import React from 'react';
import { Link } from 'react-router-dom';

// 부트스트랩 모듈 불러오기
import 'bootstrap/dist/css/bootstrap.min.css';

// 사용할 컴포넌트 import
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Main({ children }) {
    return (
        <>
            <Header />
            {/* <Link to='/'>메인</Link>
            <Link to='/detail'>디테일</Link>
            <Link to='/order'>주문</Link>
            <Link to='/complete'>주문완료</Link> */}
            <div className='h-100'>{children}</div>
            <Footer />
        </>
    );
}
