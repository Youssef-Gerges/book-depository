import { selectCart } from '@store/CartSlice';
import BookType from '@objTypes/BookType';
import BookUtils from '@utils/BookUtils.class';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PriceUtils from '@utils/PriceUtils';

const useCartItems = () => {
  const [cartItems, setCartItems] = useState<BookType[]>();
  const cart = useSelector(selectCart);

  useEffect(() => {
    const fetch = async () => {
      let books: BookType[] = [];
      for (let book of cart.items) {
        let { data: result } = await BookUtils.getBookWithAuthor(book.id);
        let price = await PriceUtils.getPrice(result[0].price.toString());
        result[0].price = price;
        books.push(result[0]);
      }
      setCartItems(books);
    };

    fetch();
  }, [cart.items]);

  return cartItems;
};

export default useCartItems;
