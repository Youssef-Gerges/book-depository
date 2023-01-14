import api from '@utils/Api';
import { useEffect } from 'react';
import { useState } from 'react';

type readingListType = {
  name: string;
  id: number;
};

const useAllReadingLists = (): Array<{ text: string; link: string }> | [] => {
  const [readingLists, setReadingLists] = useState<
    Array<{ text: string; link: string }> | []
  >([]);
  const fetch = async () => {
    const res = await api.get('/lists');

    let list = res.data.map((list: readingListType) => {
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
