import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';

//부트스트랩 모듈 불러오기
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import png from '../js.png';

export default function CategoryDisplay({ children }) {
    const [books, setBooks] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/books').then((response) => {
            setBooks(response.data);
        });
    }, []);

    function categorizingBooks(book) {
        return book.categoryId === categoryId.id;
    }
    
    return (
        <>
            <Container className='d-flex my-5 py-5'>
                {books.map((book) => {
                    return (
                        <Card key={book.id} style={{ width: '20%', margin: '0 10px' }}>
                            <Link to={`/detail/${book.id}`}>
                                <Card.Img variant='top' src={png} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{Number(book.price).toLocaleString()}원</Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
            </Container>
        </>
    );
}
