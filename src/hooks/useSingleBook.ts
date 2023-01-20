import { LeftArrow } from '@components/Arrows';
import BookType from '@objTypes/BookType';
import BookUtils from '@utils/BookUtils.class';
import PriceUtils from '@utils/PriceUtils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useSingleBook = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [book, SetBook] = useState<BookType>();
  const { id } = useParams();

  const fetchBook = async () => {
    const { data: bookFetched } = await BookUtils.getBookWithAuthor(
      Number.parseInt(id!),
      '&_expand=category'
    );

    if (bookFetched[0]) {
      const bookObj = {
        ...bookFetched[0],
        price: await PriceUtils.getPrice(bookFetched[0].price.toString()),
      };
      SetBook(bookObj);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  return { book, loading };
};

export default useSingleBook;
