import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import png from '../js.png';

export default function BookForm() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/books').then((response) => {
            setBooks(response.data);
        });
    }, []);

    return (
        <>
            <Container className='d-flex my-5 py-5'>
                {books.map((book) => {
                    return (
                        <Card style={{ width: '20%', margin: '0 10px' }}>
                            <Link to='/detail'>
                                <Card.Img variant='top' src={png} style={{}} />
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
