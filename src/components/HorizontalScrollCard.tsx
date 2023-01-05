import React, { MouseEventHandler } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { LeftArrow, RightArrow } from './Arrows';
import styles from './HorizontalScrollCard.module.css';

interface HorizontalScrollCardInterface {
  header: string;
  data: [
    {
      title: string;
      img: string;
      author: string;
      price: string;
      rating: number;
      btn: { text: string; click: MouseEventHandler<HTMLButtonElement> };
    }
  ];
}

const HorizontalScrollCard: React.FC<HorizontalScrollCardInterface> = ({
  header,
  data,
}) => {
  const renderRating = (rate: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (rate >= 1) {
        stars.push(<MdStar color="#FFD700" key={i} />);
      } else if (rate >= 0.5) {
        stars.push(<MdStarHalf color="#FFD700" key={i} />);
      } else {
        stars.push(<MdStar color="#D3D3D3" key={i} />);
      }
      rate--;
    }
    return stars;
  };

  return (
    <Card>
      <Card.Header className="bg-white">
        <h5>{header}</h5>
      </Card.Header>
      <Card.Body className="hiddenScroll">
        <ScrollMenu
          LeftArrow={<LeftArrow />}
          RightArrow={<RightArrow />}
          scrollContainerClassName="hiddenScroll"
        >
          {data.map((book, index) => (
            <div key={index} className={styles.bookContainer}>
              <img src={book.img} alt={book.title} className="w-50" />
              <div>
                <h6 className="p-0 m-0">
                  <a href="">{book.title}</a>
                </h6>
                <a href="" className={styles.bookAuthor}>
                  {book.author}
                </a>
                <div className={styles.rating}>{renderRating(book.rating)}</div>
              </div>
              <span className={styles.bookPrice}>${book.price}</span>
              <Button variant="primary" onClick={book.btn.click}>
                {book.btn.text}
              </Button>
            </div>
          ))}
        </ScrollMenu>
      </Card.Body>
    </Card>
  );
};

export default HorizontalScrollCard;
