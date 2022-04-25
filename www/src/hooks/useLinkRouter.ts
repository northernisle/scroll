import { useRouter } from 'next/router';

import { isValidUrl, filterDomain } from 'utils';

const useLinkRouter = () => {
  const router = useRouter();

  const navigate = (url: string) => {
    if (isValidUrl(url)) {
      router.push(`/${filterDomain(url)}`);
    }
  };

  return {
    navigate,
  };
};

export default useLinkRouter;
