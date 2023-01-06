import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { IoIosArrowBack } from 'react-icons/io';

const Sidebar: React.FC<{
  header: { text: string; action?: React.MouseEventHandler };
  body: Array<{ text: string; link: string }>;
  footer: { text: string; link: string };
}> = ({ header, body, footer }) => {
  return (
    <Card>
      <Card.Header className="bg-white">
        <h5
          className={`m-0 ${header.action ? styles.clickAble : null}`}
          onClick={header.action}
        >
          {header.action && <IoIosArrowBack />}
          {header.text}
        </h5>
      </Card.Header>
      <Card.Body className="py-0">
        <ul className={styles.itemsList}>
          {body.map((item, index) => (
            <li className={styles.item} key={index}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </Card.Body>
      <Card.Footer className="bg-white pt-0 border-top-0 w-100">
        <Link to={footer.link} className={styles.footer}>
          {footer.text}
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Sidebar;
