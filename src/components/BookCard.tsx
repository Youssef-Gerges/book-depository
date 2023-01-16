import BookType from '@objTypes/BookType';
import BookUtils from '@utils/BookUtils.class';
import React, { MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BookCard.module.css';

const BookCard: React.FC<{
  book: BookType;
  btn: { text: string; click: MouseEventHandler<HTMLButtonElement> };
}> = ({ book, btn }) => {
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
    <div className={styles.bookContainer}>
      <img
        src={book.cover}
        alt={book.title}
        onClick={() => navigate(`/books/${book.id}`)}
      />
      <div>
        <h6 className="p-0 m-0">
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </h6>
        <Link to={`/authors/${book.author?.id}`} className={styles.bookAuthor}>
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
  );
};

export default BookCard;
