import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';

const Sidebar: React.FC<{
  header: { text: string; action?: React.MouseEventHandler };
  body: Array<{ text: string; link: string }>;
  cName?: string;
}> = ({ header, body, cName }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <Card className={`border-0 ${cName}`}>
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
            <li
              className={`${styles.item} ${index > 5 && hidden && 'd-none'}`}
              key={index}
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </Card.Body>
      {body.length > 5 && (
        <Card.Footer className="bg-white pt-0 border-top-0 w-100">
          <a
            className={styles.footer}
            onClick={() => {
              setHidden((old) => !old);
            }}
          >
            {hidden ? 'See More' : 'See Less'}
          </a>
        </Card.Footer>
      )}
    </Card>
  );
};

export default Sidebar;
