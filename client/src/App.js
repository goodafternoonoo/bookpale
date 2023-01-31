import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BookForm from './components/BookForm.js';
import Detail from './pages/Detail.js';
import Order from './pages/Order.js';
import Complete from './pages/Complete.js';

function App() {
    return (
        <>
            <Header />
            <Link to='/'>메인</Link>
            <Link to='/detail'>디테일</Link>
            <Link to='/order'>주문</Link>
            <Link to='/complete'>주문완료</Link>
            <Routes>
                <Route path='/' element={<BookForm />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/order' element={<Order />} />
                <Route path='/complete' element={<Complete />} />
            </Routes>
            {/* <BookForm /> */}
            {/* <Detail /> */}
            <Footer />
        </>
    );
}

export default App;
