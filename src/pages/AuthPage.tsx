import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './AuthPage.module.css';

const AuthPage: React.FC = () => {
  return (
    <Container fluid className="my-2">
      <Card className="py-4">
        <Container>
          <Row>
            <Col xs={5}>
              <h5>Sign in</h5>
              <a href="#" className={styles.forgotLink}>
                Forgot password?
              </a>
              <Form>
                <Form.Control
                  placeholder="Email"
                  type="email"
                  className="mb-3"
                />
                <Form.Group>
                  <Form.Control
                    placeholder="password"
                    type="password"
                    className="mb-2"
                  />
                  <Form.Group className="mb-4">
                    <Form.Check label="Show password" />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Check label="Keep me signed in" />
                </Form.Group>
                <Button variant="primary" className="w-100">
                  Sign in
                </Button>
              </Form>
            </Col>
            <Col xs={{ offset: 2, span: 5 }}>
              <h5>Join</h5>
              <Form>
                <Form.Control
                  placeholder="Email"
                  type="email"
                  className="mb-3"
                />
                <Form.Control placeholder="Name" type="text" className="mb-3" />
                <Form.Group>
                  <Form.Control
                    placeholder="password"
                    type="password"
                    className="mb-2"
                  />
                  <Form.Group className="mb-4">
                    <Form.Check label="Show password" />
                  </Form.Group>
                </Form.Group>
                <Button variant="primary" className="w-100 ">
                  Create your account
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className={styles.helpP}>
                <a href="/help" className={styles.helpLink}>
                  Learn more
                </a>{' '}
                about "Keep me signed in"
              </p>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
};

export default AuthPage;
