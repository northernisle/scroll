import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  VStack,
  Heading,
  InputGroup,
  Input,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react';

import { isValidUrl } from 'utils';

const Sidebar = () => {
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
    <VStack maxW={450} flexShrink={0}>
      <Heading size='lg'>Free. No price tiers. No sign ups.</Heading>
      <VStack spacing={0}>
        <form onSubmit={handleSubmit}>
          <InputGroup size='lg'>
            <InputLeftAddon fontFamily='monospace'>scroll.sh/</InputLeftAddon>
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
      </VStack>
    </VStack>
  );
};

export default Sidebar;
