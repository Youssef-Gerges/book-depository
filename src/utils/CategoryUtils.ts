import CategoryType from '@objTypes/CategoryType';
import api from './Api';

export default class CategoryUtils {
  public static fetchAll = async (): Promise<CategoryType[]> => {
    const allCategories = await api.get('/categories');
    return allCategories.data;
  };
}
