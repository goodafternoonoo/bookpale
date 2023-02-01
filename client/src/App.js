import React from 'react';
import { Routes, Route } from 'react-router-dom';

//
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './pages/Main.js';
import Detail from './pages/Detail.js';
import Order from './pages/Order.js';
import Complete from './pages/Complete.js';
import Menu from './pages/Menu.js';
import Cart from './pages/Cart.js';
import BookForm from './components/BookForm.js';

export default function App() {
    return (
        <div className='vh-100'>
            <Main>
                <Routes>
                    <Route exact path='/' element={<BookForm />}></Route>
                    <Route path='/menu' element={<Menu />}></Route>
                    <Route path='/detail' element={<Detail />}></Route>
                    <Route path='/order' element={<Order />}></Route>
                    <Route path='/complete' element={<Complete />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                </Routes>
            </Main>
        </div>
    );
}
