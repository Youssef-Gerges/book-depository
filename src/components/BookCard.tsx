import BookType from '@objTypes/BookType';
import BookUtils from '@utils/BookUtils.class';
import { Button } from 'react-bootstrap';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BookCard.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@store/CartSlice';
import { toast } from 'react-toastify';
import Rating from './Rating';
import AddToCartBtn from './AddToCartBtn';

const BookCard: React.FC<{
  book: BookType;
}> = ({ book }) => {
  const navigate = useNavigate();

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
        <Rating book={book} />
        <p className="p-0 m-0 text-secondary fs-6">
          {new Date(book.publication_date).toDateString()}
        </p>
        <p className="p-0 m-0 text-secondary fs-6">{book.format}</p>
      </div>
      <span className={styles.bookPrice}>
        {book.price.code}
        {book.price.amount}
      </span>

      <AddToCartBtn
        price={Number.parseInt(book.price.amount)}
        bookId={book.id}
      />
    </div>
  );
};

export default BookCard;
