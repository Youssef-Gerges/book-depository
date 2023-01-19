import BookType from '@objTypes/BookType';
import CategoryType from '@objTypes/CategoryType';
import BookUtils from '@utils/BookUtils.class';
import CategoryUtils from '@utils/CategoryUtils';
import PriceUtils from '@utils/PriceUtils';
import { useEffect, useState } from 'react';

const useNewBooks = () => {
  const [books, setBooks] =
    useState<{ id: number; name: string; books: BookType[] }[]>();

  const fetchBooksByCategory = async () => {
    const allCategories = await CategoryUtils.fetchAll();
    let booksList = [];
    if (allCategories) {
      for (let category of allCategories) {
        let { data: booksFetched } = await BookUtils.fetchBooks(
          `?limit=20&categoryId=${category.id}&_expand=author`
        );
        if (booksFetched.length > 0) {
          let books = [];
          for (let book of booksFetched) {
            books.push({
              ...book,
              price: await PriceUtils.getPrice(book.price),
            });
          }
          booksList.push({
            id: category.id,
            name: category.name,
            books: books,
          });
        }
      }
      setBooks(booksList);
    }
  };

  useEffect(() => {
    fetchBooksByCategory();
  }, []);

  return books;
};

export default useNewBooks;
