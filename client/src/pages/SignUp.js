import React, { useState, useEffect } from 'react';
import styles from '../css/SignUp.module.css';
import { useNavigate } from 'react-router-dom';

import { FloatingLabel, Form, Button } from 'react-bootstrap';

export default function SignUp() {
    const navigate = useNavigate();

    // useState로 필요한 상태 지정하기 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 이메일 유효성 검사로직
    const validateEmail = (email) => {
      return email
        .toLowerCase()
        .match(
          
        )
    }
  


    return (
        <>
            <div className={styles['container']} />
            <div className={styles['signup-form']}>
                <h1 className='mt-4'>회원가입</h1>
                <hr />
                {/* 회원가입 입력창  */}
                <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3'>
                    <Form.Control type='email' placeholder='name@example.com' />
                </FloatingLabel>
                <FloatingLabel controlId='floatingPassword' label='Password'>
                    <Form.Control type='password' placeholder='Password' />
                </FloatingLabel>
                {/* 회원가입 버튼 묶음 */}
                <div className='d-grid gap-2'>
                    <Button variant='primary' size='lg' onClick={() => navigate('/')}>
                        회원가입
                    </Button>
                    <Button variant='secondary' size='lg' onClick={() => navigate('/')}>
                        메인
                    </Button>
                </div>
            </div>
        </>
    );
}
