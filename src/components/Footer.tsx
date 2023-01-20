import React, { useRef } from 'react';
import styles from './Footer.module.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import newsLatter from '../assets/images/newsletter-icon.svg';
import {
  TfiPinterest,
  TfiFacebook,
  TfiTwitterAlt,
  TfiInstagram,
} from 'react-icons/tfi';
import paymentOptions from '../assets/images/payment-options.png';
import api from '@utils/Api';
import { toast } from 'react-toastify';

const Footer: React.FC = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const subscribeHandler = async () => {
    if (emailInput.current?.value) {
      await api.post('/subscribers', {
        email: emailInput.current?.value,
      });
      toast.success('subscribed successfully.');
    }
    toast.error('Please enter email');
  };
  return (
    <footer>
      <Container fluid>
        <Row className="flex-column bg-white py-4  flex-md-row justify-content-md-around align-items-center">
          <Col
            span={3}
            className="d-flex flex-column align-items-center justify-content-center gap-2 flex-md-row"
          >
            <img
              src={newsLatter}
              alt="news latter"
              className={`${styles.newsLatterImage}`}
            />
            <p className={`mt-2 ${styles.newsParagraph}`}>
              Learn about new offers and get more deals by joining our
              newsletter
            </p>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center gap-3  flex-md-row">
            <Form className="d-flex flex-column align-items-center justify-content-center gap-3  flex-md-row">
              <Form.Control
                type="email"
                placeholder="Email address"
                className={styles.width}
                ref={emailInput}
              />
              <Button
                variant="primary"
                className={styles.width}
                onClick={subscribeHandler}
              >
                Sign up now
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="bg-white border-top py-3">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <p className={styles.socialHeader}>Follow us</p>
            <div className={`${styles.socialIcons} d-flex gap-5`}>
              <a href="#">
                <TfiFacebook className={`${styles.facebook} ${styles.icon}`} />
              </a>
              <a href="#">
                <TfiTwitterAlt className={`${styles.twitter} ${styles.icon}`} />
              </a>
              <a href="#">
                <TfiPinterest
                  className={`${styles.pinterest} ${styles.icon}`}
                />
              </a>
              <a href="#">
                <TfiInstagram
                  className={`${styles.instagram} ${styles.icon}`}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className={`${styles.mainFooter} py-3`}>
        <Row className="d-flex flex-column align-items-center gap-xl-2 flex-md-row align-items-md-start">
          <Col>
            <h5 className="d-none d-md-block px-2 pt-2">Explore</h5>
            <ul className={`p-2 ${styles.footerList}`}>
              <li>About us</li>
              <li>Sitemap</li>
              <li>Bookmarks</li>
              <li>Sign in/ Join</li>
            </ul>
          </Col>
          <Col>
            <h5 className="d-none d-md-block px-2 pt-2">How can we help?</h5>
            <ul className={`p-2 ${styles.footerList}`}>
              <li>Help</li>
              <li>Contact us</li>
              <li>Where's my stuff?</li>
              <li>Where do you deliver?</li>
              <li>Cancel my order</li>
              <li>Return my order</li>
            </ul>
          </Col>
          <Col>
            <h5 className="d-none d-md-block px-2 pt-2">Join us</h5>
            <ul className={`p-2 ${styles.footerList}`}>
              <li>Affiliates</li>
              <li>Jobs</li>
            </ul>
          </Col>
          <Col>
            <h5 className="d-none d-md-block px-2 pt-2">Important stuff</h5>
            <ul className={`p-2 ${styles.footerList}`}>
              <li>Complaints</li>
              <li>Cookies</li>
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
              <li>Uk Modern slavery statement</li>
            </ul>
          </Col>
        </Row>
        <Row className="px-2">
          <Col className="d-flex flex-column align-items-start flex-md-row justify-content-md-between gap-2">
            <div>
              <p>We accept these payment methods</p>
              <img src={paymentOptions} alt="payment options" />
            </div>
            <p className="text-left">
              © 2023 The Book Depository Ltd.UK. Registered company number:
              5124926
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
