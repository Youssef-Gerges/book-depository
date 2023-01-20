import AuthorType from '@objTypes/AuthorType';
import BookType from '@objTypes/BookType';
import CategoryType from '@objTypes/CategoryType';
import AuthorUtils from '@utils/AuthorUtils';
import BookUtils from '@utils/BookUtils.class';
import CategoryUtils from '@utils/CategoryUtils';
import PriceUtils from '@utils/PriceUtils';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const useCategoryBooks = (query?: string) => {
  const [category, setCategory] = useState<CategoryType>();
  const [books, setBooks] = useState<BookType[]>([]);
  const [headers, setHeaders] = useState<any>();
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  const fetchAuthor = async () => {
    const { data: categoryFetch } = await CategoryUtils.getCategoryById(id!);
    setCategory(categoryFetch[0]);
  };

  const fetchBooks = async (q: string) => {
    const { data: booksFetch, headers } = await BookUtils.getBooksByCategoryId(
      id!,
      `&_expand=author${query}${q}`
    );
    let bookList: BookType[] = [];
    if (booksFetch.length > 0) {
      for (let book of booksFetch) {
        let price = await PriceUtils.getPrice(book.price.toString());
        bookList.push({ ...book, price });
      }
    }

    setBooks(bookList);
    setHeaders(headers);
    setLoading(false);
  };

  useEffect(() => {
    let keyword = params.has('keyword') && params.get('keyword');
    let language = params.has('language') && params.get('language');
    let format = params.has('format') && params.get('format');
    let price = params.has('price') && params.get('price')?.replace('%3D', '=');
    let q = '';
    if (keyword) q = q + '&title_like=' + keyword;
    if (language) q = q + '&language_like=' + language;
    if (format) q = q + '&format_like=' + format;
    if (price) q = q + '&price' + price;
    fetchAuthor();
    fetchBooks(q);
  }, [id, query, params]);

  return { category, books, headers, loading };
};

export default useCategoryBooks;
