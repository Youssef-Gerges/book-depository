import {
  RemoveItemFormCart,
  addQty,
  removeQty,
  selectCart,
} from '@store/CartSlice';
import BookUtils from '@utils/BookUtils.class';
import React from 'react';
import { Button, Card, Col, Container, FormGroup, Row } from 'react-bootstrap';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import useCartItems from 'src/hooks/useLoadCartItems';
import useTotalCartCount from 'src/hooks/useTotalCartCount';
import useTotalCartPrice from 'src/hooks/useTotalCartPrice';
import styles from './CartPage.module.css';
import { RiShoppingBasket2Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Rating from '@components/Rating';

const CartPage: React.FC = () => {
  const totalCartPrice = useTotalCartPrice();
  const totalCartCount = useTotalCartCount();
  const cart = useSelector(selectCart);
  const books = useCartItems();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeItem = (id: number, price: number): void => {
    dispatch(RemoveItemFormCart({ id, price }));
    toast.success('Book removed 😒');
  };

  const removeOne = (id: number, price: number): void => {
    dispatch(removeQty({ id, price }));
  };
  const addOne = (id: number, price: number): void => {
    dispatch(addQty({ id, price }));
  };

  return (
    <Container fluid className="py-4">
      <Row>
        <Col>
          <h3>
            <RiShoppingBasket2Fill className="mx-2" />
            Your basket
          </h3>
        </Col>
      </Row>
      {totalCartCount !== 0 ? (
        <>
          <Row>
            <Col>
              <Card className="p-4 pb-0">
                <Row
                  className={`d-flex flex-column flex-md-row ${styles.rowBorder}`}
                >
                  <Col md={7}>
                    <p>
                      You have {totalCartCount} items for a total of{' '}
                      <span className="fw-bold">
                        {totalCartPrice?.code}
                        {totalCartPrice?.amount}
                      </span>{' '}
                      in your basket.
                    </p>
                  </Col>
                  <Col>
                    <Button variant="primary" className="w-100 py-2">
                      Checkout
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <p className={styles.smallP}>
                      In placing your order, you are confirming that you have
                      read and agree to our Terms and Conditions. Please also
                      see our Privacy Policy and our Cookies Policy.
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Card>
                <Card.Header className="bg-white">
                  <p className="fs-5 mb-0 fw-bold">Shopping basket details</p>
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
                        <p className="fw-bold">{book.title}</p>
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
                        <FormGroup className="d-flex gap-2 justify-content-center align-items-center">
                          <Button
                            onClick={() =>
                              removeOne(
                                book.id,
                                Number.parseInt(book.price.amount)
                              )
                            }
                          >
                            -
                          </Button>
                          <label>{cart.items[index]?.qty}</label>
                          <Button
                            onClick={() =>
                              addOne(
                                book.id,
                                Number.parseInt(book.price.amount)
                              )
                            }
                          >
                            +
                          </Button>
                          <span className={`priceColor`}>
                            {book.price.code}
                            {cart.items[index]?.qty *
                              Number.parseInt(book.price.amount)}
                          </span>
                        </FormGroup>
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

          <Row className="mt-2 justify-content-end">
            <Col md={4}>
              <Card>
                <Card.Body className={styles.orderSummery}>
                  <p>Delivery coast:</p>
                  <p>Free</p>
                  <p>Total:</p>
                  <p className="priceColor">
                    {totalCartPrice?.code}
                    {totalCartPrice?.amount}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" className="w-100 py-2">
                    Checkout
                  </Button>
                  {cart.currency === 'EGP' && (
                    <p>
                      Check out with PayPal available. Please change your
                      currency to display this payment option.
                    </p>
                  )}
                </Card.Footer>
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

export default CartPage;
