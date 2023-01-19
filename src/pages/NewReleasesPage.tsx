import HorizontalScrollCard from '@components/HorizontalScrollCard';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useNewBooks from 'src/hooks/UserNewBooks';

const NewReleasesPage: React.FC = () => {
  const books = useNewBooks();

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h3>New Releases</h3>
        </Col>
      </Row>

      {books?.map((category) => (
        <Row key={category.id} className="py-3">
          <Col>
            <HorizontalScrollCard
              header={category.name}
              data={category.books}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default NewReleasesPage;
