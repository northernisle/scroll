import { Center, Img, Stack, VStack } from '@chakra-ui/react';

import { Title, ArticleInput, ExtensionLinks } from 'components';

const Body = () => {
  return (
    <Center flexGrow={1} flexDirection='column'>
      <Stack
        mt={{ base: 10, sm: 0 }}
        spacing={{ base: 14, lg: 4 }}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        <VStack alignItems='flex-start' spacing={14}>
          <Title />
          <ArticleInput />
          <ExtensionLinks />
        </VStack>

        <Img
          w='full'
          minW={0}
          maxW={{ base: 400, lg: 500 }}
          flexShrink={1}
          src='/article.svg'
          alt='Article image'
        />
      </Stack>
    </Center>
  );
};

export default Body;
