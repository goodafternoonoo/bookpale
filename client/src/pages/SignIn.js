import React, { useState, useRef, useEffect } from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

// true로 설정해야 refreshtoken으로 주고 받을 수 있음
// CROS 정책을 허용한다는 의미
axios.defaults.withCredentials = true;

export default function SignIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log(email, password);
        axios
            .post('http://localhost:3000/auth/login', { email, password })
            .then((response) => {
                alert('로그인되었습니다.');

                localStorage.setItem('user', response.data);

                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert('아이디 또는 비밀번호가 일치하지 않습니다.');
            });
    }

    /* 
    // 페이지를 SPA방식으로 돌아가게 하려는 선언구 = v5버전의 history와 동일

    // 불필요한 컴포넌트의 재렌더링을 막기위해 이 로직을 사용
    const emailRef = useRef();
    const passwordRef = useRef();
    // 에러 핸들링을 하기위해 useState로 선언한 초기값
    const [errorMessage, setErrorMessage] = useState('');

    // 로그인 입력을 완료했을때 로그인 정보를 넘겨줄 이벤트?
    const handleSubmit = (event) => {
        // 이벤트를 명시적으로 처리하지 않은경우 기본동작을 실행하지 않도록하는 코드
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        emailRef.current.value = '';
        passwordRef.current.value = '';
        handleLogin(email, password);
    };

    // 로그인을 수행시 작동할 통신 코드와 로직
    const handleLogin = (email, password) => {
        if (email && password) {
            axios.post(`http://localhost:3000`);
        }
    }; */

    return (
        <>
            <div className={styles['container']} />
            <div className={styles['signin-form']}>
                <h1 className='mt-4'>로그인</h1>
                <hr />
                {/* 로그인 입력창  */}
                <div className=''></div>
                <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3'>
                    <Form.Control type='email' placeholder='name@example.com' onChange={(e) => setEmail(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId='floatingPassword' label='Password'>
                    <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </FloatingLabel>
                {/* 로그인 회원가입 버튼 묶음 */}
                <div className='d-grid gap-2 mt-5'>
                    <Button variant='primary' size='lg' onClick={handleLogin}>
                        로그인
                    </Button>
                    <Button variant='secondary' size='lg' onClick={() => navigate('/signup')}>
                        회원가입
                    </Button>
                </div>
            </div>
        </>
    );
}
