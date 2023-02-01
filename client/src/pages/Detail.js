import styles from '../css/Detail.module.css';
import png from '../js.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Detail() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    <img src={png} alt='' />
                </div>
                <div className={styles.bookContent}>
                    <div className={styles.desc}>
                        <p className={styles.title}>책 제목</p>
                        <h1>30,000원</h1>
                        <p>재밌습니다 읽어보세요~</p>
                    </div>
                    <div className={styles.buttons}>
                        <Button>장바구니</Button>
                        <Link to='/order'>
                            <Button>구매하기</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
