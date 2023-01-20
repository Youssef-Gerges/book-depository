import { addItemToCart } from '@store/CartSlice';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AddToCartBtn: React.FC<{
  price: number;
  bookId: number;
  cName?: string;
}> = ({ price, bookId, cName }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addItemToCart({
        id: bookId,
        price: price,
      })
    );
    toast.success('Book added to cart.');
  };

  return (
    <Button variant="primary" onClick={addToCart} className={cName}>
      Add to basket
    </Button>
  );
};

export default AddToCartBtn;
