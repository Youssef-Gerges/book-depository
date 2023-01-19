import BookCard from '@components/BookCard';
import SideFilter from '@components/SideFilter';
import BookType from '@objTypes/BookType';
import React, { useEffect, useMemo, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuthorBooks from 'src/hooks/useAuthorBooks';
import Pagination from 'react-bootstrap/Pagination';

const AuthorBooksPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const { author, books, headers, loading } = useAuthorBooks(
    `&_page=` + page + '&_limit=12'
  );
  useEffect(() => {
    if (headers?.link) {
      setLastPage(
        Number.parseInt(headers.link?.split('page=')[3].split('>')[0])
      );
    }
  }, headers);
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
            <h4>
              Books by {author?.first_name} {author?.last_name}
            </h4>
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

export default AuthorBooksPage;
