import { selectCart } from '@store/CartSlice';
import PriceUtils from '@utils/PriceUtils';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useTotalCartPrice = () => {
  const [totalCartPrice, setTotalCartPrice] = useState<{
    amount: string;
    code: string;
  }>();
  const cart = useSelector(selectCart);

  useEffect(() => {
    const loadPrice = async () => {
      let price = await PriceUtils.getPrice(cart.totalCart.toString());
      setTotalCartPrice(price);
    };
    loadPrice();
  }, [cart.totalCart]);

  return totalCartPrice;
};

export default useTotalCartPrice;
