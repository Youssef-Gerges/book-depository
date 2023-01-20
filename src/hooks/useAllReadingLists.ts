import ReadingListType from '@objTypes/ReadingListType';
import api from '@utils/Api';
import ReadingListUtils from '@utils/ReadingListUtils';
import { useEffect } from 'react';
import { useState } from 'react';

const useAllReadingLists = (): Array<{ text: string; link: string }> | [] => {
  const [readingLists, setReadingLists] = useState<
    Array<{ text: string; link: string }> | []
  >([]);
  const fetch = async () => {
    const readingLists = await ReadingListUtils.fetchAll();

    let list = readingLists.map((list: ReadingListType) => {
      return { text: list.name, link: `/reading-lists/${list.id}` };
    });
    setReadingLists(list);
  };

  useEffect(() => {
    fetch();
  }, []);
  return readingLists;
};

export default useAllReadingLists;
