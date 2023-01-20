import React, { useEffect, useMemo, useState } from 'react';
import BookCard from '@components/BookCard';
import SideFilter from '@components/SideFilter';
import BookType from '@objTypes/BookType';
import { Card, Col, Container, Pagination, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const BooksGrid: React.FC<{
  loading: boolean;
  books: BookType[];
  header: string;
  headers: any;
  changePage: (page: number) => void;
}> = ({ loading, header, books, headers, changePage }) => {
  const [lastPage, setLastPage] = useState(0);
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (headers?.link) {
      setLastPage(
        Number.parseInt(headers.link?.split('page=')[3].split('>')[0])
      );
    }
  }, [headers]);

  useEffect(() => {
    setPage(1);
    changePage(1);
  }, [params]);

  useEffect(() => {
    changePage(page);
  }, [page]);

  const pagination = useMemo(() => {
    let pages = [];
    if (lastPage != 0) {
      for (let num = 1; num <= lastPage; num++) {
        pages.push(num);
      }
    }
    return pages;
  }, [lastPage]);
  return (
    <Container fluid className="py-3">
      {loading === true ? (
        <h2>Loading...</h2>
      ) : (
        <Row className="flex-column-reverse flex-md-row">
          <Col md={3}>
            <SideFilter />
          </Col>
          <Col>
            <h4>{header}</h4>
            {books?.length > 0 ? (
              <Card>
                {pagination.length > 0 && (
                  <Card.Header className="bg-white p-0 align-items-center justify-content-end d-flex">
                    <Pagination className="m-0 p-2">
                      {pagination.map((p, index) => (
                        <div key={index}>
                          <Pagination.Item
                            active={page === p}
                            onClick={() => setPage(p)}
                            className="mx-1"
                          >
                            {p}
                          </Pagination.Item>
                        </div>
                      ))}
                    </Pagination>
                  </Card.Header>
                )}
                <Card.Body className="p-4">
                  <Row className="gap-4">
                    {books?.map((book: BookType, index: number) => (
                      <Col key={index}>
                        <BookCard book={book} />
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            ) : (
              <h2>No books found</h2>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BooksGrid;
