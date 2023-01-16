type BookType = {
  id: number;
  title: string;
  cover: string;
  author?: { first_name: string; last_name: string; id: number };
  price: { amount: string; code: string };
  reviews: [{ rating: number }] | null;
  format: string;
  language: string;
};

export default BookType;
