import '../css/Detail.css';
import png from '../js.png';
import { Button } from 'react-bootstrap';

export default function Detail() {
    return (
        <section className='section'>
            <div className='container'>
                <div>
                    <img src={png} alt='' />
                </div>
                <div className='bookContent'>
                    <div className='desc'>
                        <p className='title'>책 제목</p>
                        <h1>30,000원</h1>
                        <p>재밌습니다 읽어보세요~</p>
                    </div>
                    <div className='buttons'>
                        <Button>장바구니</Button>
                        <Button>구매하기</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
