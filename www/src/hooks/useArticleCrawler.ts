import { useState, useEffect } from 'react';
import ky from 'ky';

const useArticleCrawler = (articleUrl: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      const json = await ky.post(`/api/${articleUrl}`).text();

      console.log(json);
    };

    if (articleUrl) {
      getArticle();
    }
  }, [articleUrl]);

  return {
    loading,
    error,
    data,
  };
};

export default useArticleCrawler;
