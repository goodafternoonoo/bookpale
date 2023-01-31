import React from 'react';
import png from '../js.png';

import '../css/BookForm.css';

export default function BookForm() {
    return (
        <div>
            <div className='content'>
                <li>
                    <img alt='' src={png}></img>
                    <span>제목</span>
                </li>
                <li>
                    <img alt='' src={png}></img>
                    <span>제목</span>
                </li>
                <li>
                    <img alt='' src={png}></img>
                    <span>제목</span>
                </li>
                <li>
                    <img alt='' src={png}></img>
                    <span>제목</span>
                </li>
                <li>
                    <img alt='' src={png}></img>
                    <span>제목</span>
                </li>
            </div>
        </div>
    );
}
