import React from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from 'react-router-dom';

import { FloatingLabel, Form, Button } from 'react-bootstrap';

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles['container']} />
            <div className={styles['signin-form']}>
                <h1 className='mt-4'>로그인</h1>
                <hr />
                {/* 로그인 입력창  */}
                <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3'>
                    <Form.Control type='email' placeholder='name@example.com' />
                </FloatingLabel>
                <FloatingLabel controlId='floatingPassword' label='Password'>
                    <Form.Control type='password' placeholder='Password' />
                </FloatingLabel>
                {/* 로그인 회원가입 버튼 묶음 */}
                <div className='d-grid gap-2'>
                    <Button variant='primary' size='lg'>
                        로그인
                    </Button>
                    <Button variant='secondary' size='lg'>
                        회원가입
                    </Button>
                </div>
            </div>
        </>
    );
}
