import BooksGrid from '@components/BooksGrid';
import React, { useState } from 'react';
import useCategoryBooks from 'src/hooks/useCategoryBooks';
import useShop from 'src/hooks/useShop';

const ShopPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { books, headers, loading } = useShop(`&_page=` + page + '&_limit=12');
  return (
    <BooksGrid
      books={books}
      headers={headers}
      loading={loading}
      header="Shop"
      changePage={(page) => setPage(page)}
    />
  );
};

export default ShopPage;
