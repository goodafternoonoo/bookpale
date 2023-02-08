import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Pagination from 'react-js-pagination';

//부트스트랩 모듈 불러오기
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import png from '../js.png';

export default function CategoryDisplay({ children }) {
    const [books, setBooks] = useState([]);
    const { categoryName } = useParams();
    const [page, setPage] = useState(1);

    function changePage(page) {
        setPage(page);
    }

    useEffect(() => {
        axios.get('http://localhost:3001/books').then((response) => {
            setBooks(response.data);
        });
    }, []);
    
    return (
        <>
            <Container className='d-flex my-5 py-5'>
                {books.map((book) => {
                    // console.log(book.categoryId)
                    // console.log(categoryName)
                    return (
                        <>
                        {book.categoryId === categoryName &&
                        <Card key={book.id} style={{ width: '20%', margin: '0 10px' }}>
                            <Link to={`/detail/${book.id}`}>
                                <Card.Img variant='top' src={png} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{Number(book.price).toLocaleString()}원</Card.Text>
                            </Card.Body>
                        </Card>
                        }</>
                    );
                })}
            </Container>
            <Pagination 
                activePage = {page} // 현재 페이지
                itemsCountPerPage = {5} // 한 페이지당 보여줄 아이템 갯수
                totalItemsCount = {books.length} // 총 아이템 갯수
                pageRangeDisplayed = {5} // paginator의 페이지 범위
                prevPageText = {"<"} // 이전 페이지
                nextPageText = {">"} // 다음 페이지
                firstPageText = {"<<"}
                lastPageText = {">>"}
                onChange = {changePage} // 페이지 변경 함수
            />
        </>
    );
}
