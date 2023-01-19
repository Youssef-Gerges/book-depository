import BookType from '@objTypes/BookType';
import BookUtils from '@utils/BookUtils.class';
import { Button } from 'react-bootstrap';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BookCard.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@store/CartSlice';
import { toast } from 'react-toastify';

const BookCard: React.FC<{
  book: BookType;
}> = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(
      addItemToCart({
        id: Number.parseInt(e.currentTarget.dataset.product ?? ''),
        price: Number.parseInt(e.currentTarget.dataset.price ?? ''),
      })
    );
    toast.success('Book added to cart.');
  };
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
        <p className="p-0 m-0 text-secondary fs-6">
          {new Date(book.publication_date).toDateString()}
        </p>
        <p className="p-0 m-0 text-secondary fs-6">{book.format}</p>
      </div>
      <span className={styles.bookPrice}>
        {book.price.code}
        {book.price.amount}
      </span>
      <Button
        variant="primary"
        data-product={book.id}
        data-price={book.price.amount}
        onClick={addToCart}
      >
        Add to basket
      </Button>
    </div>
  );
};

export default BookCard;
