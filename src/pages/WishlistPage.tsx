import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useCartItems from 'src/hooks/useLoadCartItems';
import styles from './CartPage.module.css';
import { RiShoppingBasket2Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '@components/Rating';
import { RemoveItemFormWish, selectWishlist } from '@store/WishlistSlice';
import useWishlistItems from 'src/hooks/useWishlistItems';

const WishlistPage: React.FC = () => {
  const { books, itemsCount } = useWishlistItems();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeItem = (id: number, price: number): void => {
    dispatch(RemoveItemFormWish({ id, price }));
    toast.success('Book removed 😒');
  };

  return (
    <Container fluid className="py-4">
      <Row>
        <Col>
          <h3>
            <RiShoppingBasket2Fill className="mx-2" />
            Your wishlist
          </h3>
        </Col>
      </Row>
      {itemsCount !== 0 ? (
        <>
          <Row className="mt-2">
            <Col>
              <Card>
                <Card.Header className="bg-white">
                  <p className="fs-5 mb-0 fw-bold">Wishlist details</p>
                  <p className="mb-0">
                    You have {itemsCount} items in your wishlist.
                  </p>
                </Card.Header>
                <Card.Body className="pb-0">
                  {books?.map((book, index: number) => (
                    <Row key={index} className={`mb-4 ${styles.rowBorder}`}>
                      <Col xs={6} md={2}>
                        <img
                          alt={book.title}
                          src={book.cover}
                          className="w-100"
                        />
                      </Col>
                      <Col xs={6} md={6}>
                        <Link
                          to={`/books/${book.id}`}
                          className="fw-bold text-black"
                        >
                          {book.title}
                        </Link>
                        <div className="mt-3"></div>
                        <Rating book={book} showRating={false} />
                        <p className={`${styles.smallP} mb-2`}>
                          {book.format}, {book.language} |{' '}
                          {book.author?.first_name} {book.author?.last_name}
                        </p>
                        <p className={`m-0 fs-5 priceColor`}>
                          {book.price.code}
                          {book.price.amount}
                        </p>
                      </Col>
                      <Col xs={12} md={4} className="mt-4 mt-md-0">
                        <Button
                          variant="light"
                          className="w-100 mt-3"
                          onClick={() =>
                            removeItem(
                              book.id,
                              Number.parseInt(book.price.amount)
                            )
                          }
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Button
              variant="primary"
              onClick={() => navigate('/')}
              className="w-50 py-2 fs-5"
            >
              Shopping Now 🤞
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default WishlistPage;
