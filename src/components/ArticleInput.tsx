import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useBreakpointValue,
  Box,
  InputGroup,
  Input,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react';

import { isValidUrl } from 'utils';

const ArticleInput = () => {
  const hideAddon = useBreakpointValue({ base: true, sm: false });
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleSubmit = (
    event?: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    event?.preventDefault();

    if (isValidUrl(url)) {
      router.push(`/${url}`);
    }
  };

  return (
    <Box w={{ base: '100%', lg: 'initial' }}>
      <form onSubmit={handleSubmit}>
        <InputGroup size='lg'>
          {!hideAddon && (
            <InputLeftAddon fontFamily='monospace'>scroll.sh/</InputLeftAddon>
          )}
          <Input
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
            placeholder='Article link'
            borderRightRadius={0}
          />
          <Button borderLeftRadius={0} onClick={handleSubmit}>
            Read
          </Button>
        </InputGroup>
      </form>
    </Box>
  );
};

export default ArticleInput;
