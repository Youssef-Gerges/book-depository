import axios, { Axios, AxiosPromise } from 'axios';
import api from './Api';
import BookType from '@objTypes/BookType';

export default class BookUtils {
  public static calcRating = (reviews: [{ rating: number }] | null) => {
    if (reviews && reviews.length > 0) {
      let sum = 0;
      reviews.map((rating) => {
        sum = sum + rating.rating;
      });
      return sum / reviews.length;
    }
    return 0;
  };

  public static getBookWithAuthor = async (
    id: number,
    query: string = ''
  ): AxiosPromise<BookType[]> => {
    const res = await api.get(`books?id=${id}&_expand=author${query}`);
    return res;
  };

  public static fetchBooks = async (query: string = ''): AxiosPromise<any> => {
    const res = await api.get(`/books${query}`);
    return res;
  };

  public static getBooksByAuthorId = async (
    authorId: string,
    query: string = ''
  ): AxiosPromise<BookType[]> => {
    const res = await api.get(`/books?authorId=${authorId}${query}`);
    return res;
  };
}
