import AuthorType from './AuthorType';

type BookType = {
  id: number;
  title: string;
  cover: string;
  author: AuthorType;
  price: { amount: string; code: string };
  reviews: [{ rating: number }] | null;
  format: string;
  language: string;
  publication_date: string;
};

export default BookType;
