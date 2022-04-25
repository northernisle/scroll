import { ParsedUrlQuery } from 'querystring';

export const isValidUrl = (url: string) => {
  const urlRegex =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  return urlRegex.test(url);
};

export const filterDomain = (url: string) => {
  const domainRegex =
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;

  const match = domainRegex.exec(url);
  return url.substring(match?.index as number);
};

export const parseQuery = (query: ParsedUrlQuery, key = 'article') => {
  return (query?.[key] as string[])?.join('/');
};
