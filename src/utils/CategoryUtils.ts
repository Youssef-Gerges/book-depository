import CategoryType from '@objTypes/CategoryType';
import api from './Api';
import { AxiosPromise } from 'axios';

export default class CategoryUtils {
  public static fetchAll = async (): Promise<CategoryType[]> => {
    const allCategories = await api.get('/categories');
    return allCategories.data;
  };

  public static getCategoryById = async (
    id: string
  ): AxiosPromise<CategoryType[]> => {
    const category = await api.get(`/categories?id=${id}`);
    return category;
  };
}
