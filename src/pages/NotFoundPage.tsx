import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import logo from '@assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col className="d-flex align-items-center justify-content-center my-4">
          <img src={logo} alt="book depository" className="w-25 my-4" />
        </Col>
      </Row>
      <Row>
        <Col className="my-4">
          <Card>
            <Card.Body className="p-4 m-4">
              <h2>Oops</h2>
              <p>Sorry but the page you are looking for can't be found.</p>
              <p>
                Please visit our homepage or one of the links below instead.
              </p>
              <Button
                variant="primary"
                className="px-4 py-2"
                onClick={() => navigate('/')}
              >
                Homepage
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
