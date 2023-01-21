import { selectCart } from '@store/CartSlice';
import BookType from '@objTypes/BookType';
import BookUtils from '@utils/BookUtils.class';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PriceUtils from '@utils/PriceUtils';
import { selectWishlist } from '@store/WishlistSlice';

const useWishlistItems = () => {
  const [wishlistItems, setWishlistItems] = useState<BookType[]>();
  const wishlist = useSelector(selectWishlist);

  useEffect(() => {
    const fetch = async () => {
      let books: BookType[] = [];
      for (let book of wishlist.items) {
        let { data: result } = await BookUtils.getBookWithAuthor(book.id);
        let price = await PriceUtils.getPrice(result[0].price.toString());
        result[0].price = price;
        books.push(result[0]);
      }
      setWishlistItems(books);
    };

    fetch();
  }, [wishlist.items]);

  return { books: wishlistItems, itemsCount: wishlistItems?.length };
};

export default useWishlistItems;
