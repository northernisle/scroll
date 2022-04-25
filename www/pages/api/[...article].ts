import { NextApiRequest, NextApiResponse } from 'next';
import ky from 'ky';

import { parseQuery } from 'utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const articleUrl = parseQuery(req.query);
  const article = await (
    await ky.get(`https://${articleUrl}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:99.0) Gecko/20100101 Firefox/99.0',
      },
    })
  ).text();

  res.status(200).send(article);
};
