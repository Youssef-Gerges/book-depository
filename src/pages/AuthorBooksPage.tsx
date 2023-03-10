import BooksGrid from '@components/BooksGrid';
import React, { useState } from 'react';
import useAuthorBooks from 'src/hooks/useAuthorBooks';

const AuthorBooksPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { author, books, headers, loading } = useAuthorBooks(
    `&_page=` + page + '&_limit=12'
  );

  return (
    <BooksGrid
      books={books}
      headers={headers}
      loading={loading}
      header={`Books by ${author?.first_name} ${author?.last_name}`}
      changePage={(page) => setPage(page)}
    />
  );
};

export default AuthorBooksPage;
