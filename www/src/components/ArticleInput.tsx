import { useState } from 'react';
import {
  useBreakpointValue,
  Box,
  InputGroup,
  Input,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react';

import { useLinkRouter } from 'hooks';

const ArticleInput = () => {
  const hideAddon = useBreakpointValue({ base: true, sm: false });
  const [url, setUrl] = useState('');
  const router = useLinkRouter();

  const handleSubmit = (
    event?: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    event?.preventDefault();
    router.navigate(url);
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
