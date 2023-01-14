import api from '@utils/Api';
import BookUtils from '@utils/BookUtils.class';
import { useEffect } from 'react';
import { useState } from 'react';

type bookType = {
  id: number;
  title: string;
  cover: string;
  author: string;
  price: string;
  reviews: [{ rating: number }] | null;
};

const useBooksByLanguage = (
  lang: string
): { books: Array<bookType> | []; loading: boolean } => {
  const [books, setBooks] = useState<Array<bookType> | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBooks = async () => {
    const res = await api.get(`/books?language=${lang}&_limit=10`);

    let list = [];

    for (let book of res.data) {
      list.push({ ...book, price: await BookUtils.getPrice(book.price) });
    }

    setBooks(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, loading };
};
export default useBooksByLanguage;
