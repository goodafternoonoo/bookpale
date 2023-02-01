import React from 'react';
import { Routes, Route } from 'react-router-dom';

//
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './pages/Main.js';
import Detail from './pages/Detail.js';
import Order from './pages/Order.js';
import Complete from './pages/Complete.js';
import BookForm from './components/BookForm.js';

export default function App() {
    return (
        <>
            <Main>
                <Routes>
                    <Route exact path='/' element={<BookForm />}>
                        메인
                    </Route>
                    <Route path='/detail' element={<Detail />}>
                        디테일
                    </Route>
                    <Route path='/order' element={<Order />}>
                        주문
                    </Route>
                    <Route path='/complete' element={<Complete />}>
                        주문완료
                    </Route>
                </Routes>
            </Main>
        </>
    );
}
