import HorizontalScrollCard from '@components/HorizontalScrollCard';
import { addItemToCart } from '@store/CartSlice';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useNewBooks from 'src/hooks/UserNewBooks';

const NewReleasesPage: React.FC = () => {
  const books = useNewBooks();
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
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h3>New Releases</h3>
        </Col>
      </Row>

      {books?.map((category) => (
        <Row key={category.id} className="py-3">
          <Col>
            <HorizontalScrollCard
              header={category.name}
              data={category.books}
              btn={{ text: 'Add to basket', click: addToCart }}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default NewReleasesPage;
