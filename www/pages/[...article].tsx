import { GetServerSideProps } from 'next';

import { parseQuery } from 'utils';
import { useArticleCrawler } from 'hooks';

interface ArticleProps {
  articleUrl: string;
}

const Article = ({ articleUrl }: ArticleProps) => {
  const { loading, error, data } = useArticleCrawler(articleUrl);
  return 123;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      articleUrl: parseQuery(context.query),
    },
  };
};

export default Article;
