import AddToCartBtn from '@components/AddToCartBtn';
import AddToWishBtn from '@components/AddToWishBtn';
import Rating from '@components/Rating';
import RatingInput from '@components/RatingInput';
import { selectUser } from '@store/UserSlice';
import React, {
  EventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';
import { BsCheck2Circle, BsPinterest } from 'react-icons/bs';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSingleBook from 'src/hooks/useSingleBook';

const SingleBookPage: React.FC = () => {
  const { book, loading } = useSingleBook();
  const user = useSelector(selectUser);
  const [review, setReview] = useState<string>('');
  const [rate, setRate] = useState<number>(0);

  const submitReviewHandler = (e: FormEvent) => {
    e.preventDefault();
    toast.success(`${review} rating: ${rate}`);
  };

  return (
    <Container fluid className="py-3">
      {loading === true ? (
        <h2>Loading...</h2>
      ) : book ? (
        <>
          <Row>
            <Col>
              <div className="shadow-sm border rounded mb-2">
                <p className="p-2 mb-0 text-muted">
                  Category:
                  <Link
                    to={`/categories/${book.category?.id}`}
                    className="ps-2 text-decoration-underline text-black"
                  >
                    {book.category?.name}
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <Card className="p-4 rounded-0">
                <Row>
                  <Col md={4}>
                    <img src={book.cover} alt={book.title} className="w-100" />
                  </Col>
                  <Col>
                    <h2 className="mb-4">{book.title}</h2>
                    <Rating book={book} showRating={true} />
                    <p className="mb-0 text-muted">
                      {book.format} |{' '}
                      <Link to={`/languages/${book.language}`}>
                        {book.language}
                      </Link>
                    </p>
                    <p>
                      By (author)
                      <Link to={`/authors/${book.author.id}`}>
                        {' '}
                        {book.author.first_name} {book.author.last_name}
                      </Link>
                    </p>
                    <p>
                      Share
                      <Link to="/">
                        <RiFacebookCircleFill className="text-muted fs-2 mx-1 ms-3" />
                      </Link>
                      <Link to="/">
                        <AiFillTwitterCircle className="text-muted fs-2 mx-1" />
                      </Link>
                      <Link to="/">
                        <BsPinterest className="text-muted fs-2 mx-1" />
                      </Link>
                    </p>
                    <p>{book.description}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card className="rounded-0">
                <Card.Header className="p-3 bg-white">
                  <p className="priceColor m-0 fs-2">
                    {book.price.code}
                    {book.price.amount}
                  </p>
                </Card.Header>
                <Card.Body className="px-3">
                  <p className="fs-5 fw-bold mb-4">
                    <BiRocket className="me-3 fs-3" />
                    Free delivery worldwide.
                  </p>
                  <p className="fs-5 fw-bold mb-1">
                    <BsCheck2Circle className="me-3 fs-3" />
                    Prices are inclusive of all custom duties and local taxes.
                  </p>
                </Card.Body>
                <Card.Footer className="bg-white p-3">
                  <AddToCartBtn
                    bookId={book.id}
                    price={Number.parseFloat(book.price.amount)}
                    cName="w-100 py-2 fw-bold"
                  />
                  <AddToWishBtn
                    bookId={book.id}
                    price={Number.parseFloat(book.price.amount)}
                    cName="w-100 py-2 fw-bold mt-2"
                  />
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <Card className="rounded-0">
                <Card.Header className="bg-white pb-0">
                  <h5>Product details</h5>
                </Card.Header>
                <Card.Body
                  className="d-grid"
                  style={{ gridTemplateColumns: '1fr 1fr' }}
                >
                  <p>
                    <span className="fw-bold">Format:</span> {book.format} |{' '}
                    {book.pages} pages
                  </p>
                  <p>
                    <span className="fw-bold">Dimensions:</span> {book.height} x{' '}
                    {book.width} x {book.length}mm | {book.weight}g
                  </p>
                  <p>
                    <span className="fw-bold">Publication date:</span>{' '}
                    {new Date(book.publication_date).toDateString()}
                  </p>
                  <p>
                    <span className="fw-bold">Publisher:</span> {book.publisher}
                  </p>
                  <p>
                    <span className="fw-bold">Publication City/Country:</span>{' '}
                    {book.city}
                  </p>
                  <p>
                    <span className="fw-bold">Language:</span> {book.language}
                  </p>
                  <p>
                    <span className="fw-bold">ISBN:</span> {book.isbn}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {book.reviews && (
            <Row className="mt-1">
              <Col>
                <Card className="rounded-0">
                  <Card.Header className="bg-white pb-0">
                    <h5>Review quotes</h5>
                  </Card.Header>
                  <Card.Body>
                    {book.reviews.map((review, index) => {
                      return (
                        <p className="fw-bold" key={index}>
                          {review.content}
                        </p>
                      );
                    })}
                  </Card.Body>
                  {user.email && (
                    <Card.Footer className="bg-white">
                      <form
                        className="d-flex flex-column"
                        onSubmit={submitReviewHandler}
                      >
                        <InputGroup>
                          <InputGroup.Text>Your review:</InputGroup.Text>
                          <FormControl
                            as="textarea"
                            onChange={(e) => setReview(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <InputGroup.Text className="me-2">
                            Your rating:
                          </InputGroup.Text>
                          <RatingInput
                            valueChanged={(selected) => {
                              setRate(selected);
                            }}
                          />
                        </InputGroup>
                        <Button
                          type="submit"
                          variant="primary"
                          className="justify-self-end align-self-end w-25 mt-2 py-2"
                        >
                          Submit review
                        </Button>
                      </form>
                    </Card.Footer>
                  )}
                </Card>
              </Col>
            </Row>
          )}
        </>
      ) : (
        <h2>Cannot find book</h2>
      )}
    </Container>
  );
};

export default SingleBookPage;
