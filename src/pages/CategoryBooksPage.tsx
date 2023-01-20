import BooksGrid from '@components/BooksGrid';
import React, { useEffect, useMemo, useState } from 'react';
import useCategoryBooks from 'src/hooks/useCategoryBooks';

const CategoryBooksPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { category, books, headers, loading } = useCategoryBooks(
    `&_page=` + page + '&_limit=12'
  );
  return (
    <BooksGrid
      books={books}
      headers={headers}
      loading={loading}
      header={`Books in ${category?.name}`}
      changePage={(page) => setPage(page)}
    />
  );
};

export default CategoryBooksPage;
