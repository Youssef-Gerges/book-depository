import React, { MouseEventHandler } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { LeftArrow, RightArrow } from './Arrows';
import styles from './HorizontalScrollCard.module.css';
import BookUtils from '@utils/BookUtils.class';
import { Link, useNavigate } from 'react-router-dom';
import BookType from '@objTypes/BookType';

interface HorizontalScrollCardInterface {
  header: string;
  data: Array<BookType>;
  btn: { text: string; click: MouseEventHandler<HTMLButtonElement> };
}

const HorizontalScrollCard: React.FC<HorizontalScrollCardInterface> = ({
  header,
  data,
  btn,
}) => {
  const navigate = useNavigate();

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
              <img
                src={book.cover}
                alt={book.title}
                onClick={() => navigate(`/books/${book.id}`)}
              />
              <div>
                <h6 className="p-0 m-0">
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </h6>
                <Link
                  to={`/authors/${book.author?.id}`}
                  className={styles.bookAuthor}
                >
                  {book.author?.first_name} {book.author?.last_name}
                </Link>
                <div className={styles.rating}>
                  {renderRating(BookUtils.calcRating(book.reviews))} (
                  {book.reviews?.length ?? 0})
                </div>
              </div>
              <span className={styles.bookPrice}>
                {book.price.code}
                {book.price.amount}
              </span>
              <Button
                variant="primary"
                data-product={book.id}
                data-price={book.price.amount}
                onClick={btn.click}
              >
                {btn.text}
              </Button>
            </div>
          ))}
        </ScrollMenu>
      </Card.Body>
    </Card>
  );
};

export default HorizontalScrollCard;
