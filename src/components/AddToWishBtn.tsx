import { addItemToWish } from '@store/WishlistSlice';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AddToWishBtn: React.FC<{
  price: number;
  bookId: number;
  cName?: string;
}> = ({ price, bookId, cName }) => {
  const dispatch = useDispatch();
  const addToWish = () => {
    dispatch(
      addItemToWish({
        id: bookId,
        price: price,
      })
    );
    toast.success('Book added to wishlist.');
  };

  return (
    <Button variant="light" onClick={addToWish} className={cName}>
      Add to wishlist
    </Button>
  );
};

export default AddToWishBtn;
