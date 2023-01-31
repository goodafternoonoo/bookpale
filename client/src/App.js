import './App.css';
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
            <BookForm />
            {/* <Detail /> */}
            <Footer />
        </>
    );
}

export default App;
