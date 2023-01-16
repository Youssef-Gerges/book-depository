import BookType from '@objTypes/BookType';
import api from '@utils/Api';
import PriceUtils from '@utils/PriceUtils';
import { useEffect } from 'react';
import { useState } from 'react';

const useRecentlyBooks = (
  limit: number
): { books: Array<BookType> | []; loading: boolean } => {
  const [books, setBooks] = useState<Array<BookType> | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBooks = async () => {
    const res = await api.get(
      `/books?_limit=${limit}&_order=desc&_sort=id&_expand=author`
    );
    let list = [];

    for (let book of res.data) {
      list.push({ ...book, price: await PriceUtils.getPrice(book.price) });
    }

    setBooks(list);
    setLoading(false);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, loading };
};
export default useRecentlyBooks;
