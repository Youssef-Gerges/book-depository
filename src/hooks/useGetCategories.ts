import CategoryType from '@objTypes/CategoryType';
import CategoryUtils from '@utils/CategoryUtils';
import { useEffect, useState } from 'react';

const useGetCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>();
  const fetchAllCategories = async () => {
    const categories = await CategoryUtils.fetchAll();
    setCategories(categories);
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);
  return categories;
};
export default useGetCategories;
