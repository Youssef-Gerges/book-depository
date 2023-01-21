import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

const HelpPage: React.FC = () => {
  return (
    <Container fluid className="p-3">
      <Row>
        <Col>
          <Card className="p-4 rounded-0">
            <h3>Help</h3>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="fw-bold">Brexit information</span>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion flush>
                    <Accordion.Item eventKey="0-1">
                      <Accordion.Header>
                        <span className="fw-bold">Taxes</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem officia nemo accusamus, perspiciatis dolorem,
                        recusandae dolore odio, esse sapiente aliquam eveniet
                        nihil nesciunt? Voluptatum error illo quae quidem
                        voluptates labore.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0-2">
                      <Accordion.Header>
                        <span className="fw-bold">Taxes</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem officia nemo accusamus, perspiciatis dolorem,
                        recusandae dolore odio, esse sapiente aliquam eveniet
                        nihil nesciunt? Voluptatum error illo quae quidem
                        voluptates labore.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0-3">
                      <Accordion.Header>
                        <span className="fw-bold">Taxes</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem officia nemo accusamus, perspiciatis dolorem,
                        recusandae dolore odio, esse sapiente aliquam eveniet
                        nihil nesciunt? Voluptatum error illo quae quidem
                        voluptates labore.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="fw-bold">Brexit information</span>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion flush>
                    <Accordion.Item eventKey="1-1">
                      <Accordion.Header>
                        <span className="fw-bold">Taxes</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem officia nemo accusamus, perspiciatis dolorem,
                        recusandae dolore odio, esse sapiente aliquam eveniet
                        nihil nesciunt? Voluptatum error illo quae quidem
                        voluptates labore.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1-2">
                      <Accordion.Header>
                        <span className="fw-bold">Taxes</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem officia nemo accusamus, perspiciatis dolorem,
                        recusandae dolore odio, esse sapiente aliquam eveniet
                        nihil nesciunt? Voluptatum error illo quae quidem
                        voluptates labore.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1-3">
                      <Accordion.Header>
                        <span className="fw-bold">Taxes</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem officia nemo accusamus, perspiciatis dolorem,
                        recusandae dolore odio, esse sapiente aliquam eveniet
                        nihil nesciunt? Voluptatum error illo quae quidem
                        voluptates labore.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpPage;
