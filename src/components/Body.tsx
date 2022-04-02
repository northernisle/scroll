import { Center, Heading, Box, HStack, Img } from '@chakra-ui/react';

import { Sidebar } from 'components';

const Body = () => {
  return (
    <Center flexGrow={1} minHeight={800} flexDir='column'>
      <Heading size='3xl'>
        Read your favorite articles{' '}
        <Box color='accent' display='inline'>
          without ads and paywalls
        </Box>
        , just like you deserve.
      </Heading>
      <HStack
        w='full'
        justifyContent='space-between'
        mt={32}
        alignItems='flex-start'
      >
        <Sidebar />
        <Img src='/article.svg' flexShrink={1} maxW={650} w='full' />
      </HStack>
    </Center>
  );
};

export default Body;
