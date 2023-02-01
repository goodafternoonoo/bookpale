import React from 'react';
// import png from '../js.png';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

// import '../css/BookForm.css';
import png from '../js.png';

export default function BookForm() {
    return (
        <>
            <Card style={{ width: '20%' }}>
                <Link to='/detail'>
                    <Card.Img variant='top' src={png} style={{}} />
                </Link>
                <Card.Body>
                    <Card.Text>책이름</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
