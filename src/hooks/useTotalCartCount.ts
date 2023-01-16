import { selectCart } from '@store/CartSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useTotalCartCount = () => {
  const [count, setCount] = useState<number>(0);
  const cart = useSelector(selectCart);

  useEffect(() => {
    let totalCount = cart.items.reduce((c, item) => {
      return c + item.qty;
    }, 0);

    setCount(totalCount);
  });

  return count;
};

export default useTotalCartCount;
