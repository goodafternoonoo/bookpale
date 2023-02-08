import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../css/Detail.module.css';
import png from '../js.png';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/books/${id}`).then((response) => {
            setBook(response.data);
        });
    }, [id]);

    function handleClickCart(e) {
        const cartOrg = localStorage.getItem('cart');
        const cart = cartOrg ? JSON?.parse(cartOrg) : [];
        const isCart = cart?.find((item) => id === item.id);

        if (isCart) return alert('이미 장바구니에 존재하는 상품입니다.');

        localStorage.setItem('cart', JSON.stringify([...cart, { ...book, amount: '1' }]));
        alert('장바구니에 추가되었습니다.');
    }

    function handleClickBuy(e) {
        navigate('/order', {
            state: {
                book,
            },
        });
    }

    return (
        <div className='container '>
            <h1 className='mt-3'>상품상세</h1>
            <hr />
            <div className='d-flex justify-content-between'>
                <div className='input-form row mb-5 w-50'>
                    <img src={png} alt='' />
                </div>
                <div className={(styles.bookContent, 'input-form row mb-5 w-50')}>
                    <div className={styles.desc}>
                        <p className={styles.title}>{book.title}</p>
                        <h1>{Number(book.price).toLocaleString()}원</h1>
                        <p>{book.detailDescription}</p>
                    </div>
                    <div className={styles.buttons}>
                        <Button onClick={handleClickCart}>장바구니</Button>
                        {/* <Link to='/order'> */}
                        <Button onClick={handleClickBuy}>구매하기</Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
