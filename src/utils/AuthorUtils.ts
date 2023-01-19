import AuthorType from '@objTypes/AuthorType';
import api from './Api';

export default class AuthorUtils {
  public static getAuthorById = async (id: string): Promise<AuthorType> => {
    const author = await api.get(`/authors/${id}`);
    return author.data;
  };
}
