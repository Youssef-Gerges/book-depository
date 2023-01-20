import api from './Api';
import { AxiosPromise } from 'axios';
import ReadingListType from '@objTypes/ReadingListType';

export default class ReadingListUtils {
  public static fetchAll = async (): Promise<ReadingListType[]> => {
    const allCategories = await api.get('/lists');
    return allCategories.data;
  };

  public static getListById = async (
    id: string
  ): AxiosPromise<ReadingListType[]> => {
    const category = await api.get(`/lists?id=${id}`);
    return category;
  };
}
