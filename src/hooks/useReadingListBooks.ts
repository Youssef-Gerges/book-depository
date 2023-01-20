import BookType from '@objTypes/BookType';
import ReadingListType from '@objTypes/ReadingListType';
import BookUtils from '@utils/BookUtils.class';
import PriceUtils from '@utils/PriceUtils';
import ReadingListUtils from '@utils/ReadingListUtils';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const useReadingListBooks = (query?: string) => {
  const [list, setList] = useState<ReadingListType>();
  const [books, setBooks] = useState<BookType[]>([]);
  const [headers, setHeaders] = useState<any>();
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  const fetchList = async () => {
    const { data: listFetch } = await ReadingListUtils.getListById(id!);
    setList(listFetch[0]);
  };

  const fetchBooks = async (q: string) => {
    const { data: booksFetch, headers } = await BookUtils.getBooksByListId(
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
    fetchList();
    fetchBooks(q);
  }, [id, query, params]);

  return { list, books, headers, loading };
};

export default useReadingListBooks;
