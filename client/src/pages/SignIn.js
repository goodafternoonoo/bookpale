import React from 'react';

// 로그인 입력폼 import
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function SignIn() {
    return (
        <>
            <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3'>
                <Form.Control type='email' placeholder='name@example.com' />
            </FloatingLabel>
            <FloatingLabel controlId='floatingPassword' label='Password'>
                <Form.Control type='password' placeholder='Password' />
            </FloatingLabel>
        </>
    );
}
