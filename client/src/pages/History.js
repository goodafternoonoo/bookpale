// import { useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Styles from '../css/History.module.css';

export default function History() {
    function handleClick() {
        if (window.confirm('취소하시겠습니까?')) {
            alert('취소되었습니다.');
        }
    }

    return (
        <Container>
            <h1 className='mt-3'>주문조회</h1>
            <hr />
            <div className='input-form-backgroud row mb-5'>
                <div className='input-form' style={{ marginTop: '1.5rem' }}>
                    <Container>
                        <Row className={Styles.th}>
                            <Col>날짜</Col>
                            <Col xs={5}>주문정보</Col>
                            <Col>상태</Col>
                            <Col>신청</Col>
                        </Row>
                        <Row className={Styles.tr}>
                            <Col>2023-02-01</Col>
                            <Col xs={5}>여성 청바지 / 1개</Col>
                            <Col>배송중</Col>
                            <Col>
                                <Button variant='danger' size={'sm'} onClick={handleClick}>
                                    주문 취소
                                </Button>
                            </Col>
                        </Row>
                        <Row className={Styles.tr}>
                            <Col>2023-02-01</Col>
                            <Col xs={5}>가죽 자켓 / 1개</Col>
                            <Col>배송 완료</Col>
                            <Col>
                                <Button variant='danger' size={'sm'} onClick={handleClick}>
                                    주문 취소
                                </Button>
                            </Col>
                        </Row>
                        <Row className={Styles.tr}>
                            <Col>2023-02-01</Col>
                            <Col xs={5}>고라니 / 1개</Col>
                            <Col>상품 준비중</Col>
                            <Col>
                                <Button variant='danger' size={'sm'} onClick={handleClick}>
                                    주문 취소
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Container>
    );
}
