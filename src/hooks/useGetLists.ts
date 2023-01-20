import CategoryType from '@objTypes/CategoryType';
import ReadingListType from '@objTypes/ReadingListType';
import CategoryUtils from '@utils/CategoryUtils';
import ReadingListUtils from '@utils/ReadingListUtils';
import { useEffect, useState } from 'react';

const useGetLists = () => {
  const [readingLists, setReadingLists] = useState<ReadingListType[]>();

  const fetchAllReadingLists = async () => {
    const readingLists = await ReadingListUtils.fetchAll();
    setReadingLists(readingLists);
  };

  useEffect(() => {
    fetchAllReadingLists();
  }, []);
  return readingLists;
};
export default useGetLists;
