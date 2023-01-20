import AuthorType from './AuthorType';

type BookType = {
  id: number;
  title: string;
  cover: string;
  author: AuthorType;
  price: { amount: string; code: string };
  reviews: [{ rating: number; userId: number; content: string }] | null;
  format: string;
  language: string;
  publication_date: string;
  category?: { id: number; name: string };
  description: string;
  pages: number;
  height: number;
  weight: number;
  length: number;
  width: number;
  publisher: string;
  city: string;
  isbn: string;
};

export default BookType;
