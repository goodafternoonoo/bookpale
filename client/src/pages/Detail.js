import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../css/Detail.module.css';
import png from '../js.png';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Detail() {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/books/${id}`).then((response) => {
            setBook(response.data);
        });
    }, [id]);

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
                        <Button>장바구니</Button>
                        <Link to='/order'>
                            <Button>구매하기</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
