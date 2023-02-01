import React from 'react';
// import png from '../js.png';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// import '../css/BookForm.css';

export default function BookForm() {
    return (
       <>
       <Card style={{ width: '20%' }}>
      <Card.Img variant="top" src="../js.png" style={{weight: '20px', height: '20px'}}/>
      <Card.Body>
        
        <Card.Text>
          책이름
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    );
}
