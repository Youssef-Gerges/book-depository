import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styles from './TextCard.module.css';
import { IoIosArrowForward } from 'react-icons/io';

const TextCard: React.FC<{
  link: { text: string; location: string };
  icon?: string;
}> = ({ link, icon }) => {
  return (
    <Card className={styles.textCard}>
      {icon && (
        <Row>
          <Col>
            <img src={icon} alt={link.text} />
          </Col>
        </Row>
      )}
      <Row className={styles.link}>
        <Col className="text-center align-items-center justify-content-center d-flex">
          <a href={link.location} className={styles.text}>
            {link.text}
            <IoIosArrowForward className={styles.linkIcon} />
          </a>
        </Col>
      </Row>
    </Card>
  );
};

export default TextCard;
