import React, { useState, useRef, useEffect } from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

// true로 설정해야 refreshtoken으로 주고 받을 수 있음
// CROS 정책을 허용한다는 의미
axios.defaults.withCredentials = true;

export default function SignIn({ signinHandler }) {
    //  = v5버전의 history와 동일
    const navigate = useNavigate();

    // 이메일, 패스워드 초기값 선언
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // 에러 핸들링을 하기위해 useState로 선언한 초기값
    const [errorMessage, setErrorMessage] = useState('');

    // 로그인 입력을 완료했을때 로그인 정보를 넘겨줄 이벤트
    // 입력받은 후에는
    const handleSubmit = async (e) => {
        // 이벤트를 명시적으로 처리하지 않은경우 기본동작을 실행하지 않도록하는 코드
        e.preventDefault();

        // 입력받는 데이터 폼을 객체 변수로 선언
        const dataForm = {
            email,
            password,
        };
        // 이 구문에서 axios통신을 할 예정
        try {
            await axios.post(
                `http://localhost:3000/auth/signin`,
                { ...dataForm },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
        } catch {}
    };

    // 로그인을 수행시 작동할 통신 코드와 로직
    const handlesignin = (email, password) => {
        if (email && password) {
            axios
                .post(
                    `http://localhost:3000/auth/signin`,
                    { email, password },
                    {
                        // json형태로 header를 받겠다
                        headers: { 'Content-Type': 'application/json' },
                    }
                )
                .then((res) => {
                    axios.defaults.headers.common['Authorization'] = 'Bearer' + res.data.accessToken;
                    navigate.push('/'); // 이전에는 history.push로 주었는데 로직이 맞는지
                    signinHandler(res.data);
                })
                .catch((err) => {
                    setErrorMessage('이메일과 비밀번호를 확인하세요');
                });
        } else {
            setErrorMessage('이메일과 비밀번호를 입력하세요');
        }
    };

    return (
        <>
            <div className={styles['container']} />
            <div className={styles['signin-form']}>
                <h1 className='mt-4'>로그인</h1>
                <hr />
                {/* 로그인 입력창  */}
                <div className=''></div>
                <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3'>
                    <Form.Control type='email' placeholder='name@example.com' />
                </FloatingLabel>
                <FloatingLabel controlId='floatingPassword' label='Password'>
                    <Form.Control type='password' placeholder='Password' />
                </FloatingLabel>
                {/* 로그인 회원가입 버튼 묶음 */}
                <div className='d-grid gap-2'>
                    <Button variant='primary' size='lg' onClick={() => navigate('/')}>
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
