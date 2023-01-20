import BooksGrid from '@components/BooksGrid';
import React, { useState } from 'react';
import useReadingListBooks from 'src/hooks/useReadingListBooks';

const ReadingListBooksPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { list, books, headers, loading } = useReadingListBooks(
    `&_page=` + page + '&_limit=12'
  );
  return (
    <BooksGrid
      books={books}
      headers={headers}
      loading={loading}
      header={`Books in ${list?.name}`}
      changePage={(page) => setPage(page)}
    />
  );
};

export default ReadingListBooksPage;
