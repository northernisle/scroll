import NextLink from 'next/link';
import { HStack, Link, Heading } from '@chakra-ui/react';

import { LogoIcon } from 'icons';
import { ColorModeButton } from 'components';

const Header = () => {
  return (
    <HStack py={5} w='full' justifyContent='space-between'>
      <NextLink passHref href='/'>
        <Link>
          <HStack alignItems='center'>
            <LogoIcon boxSize={12} />
            <Heading>Scroll</Heading>
          </HStack>
        </Link>
      </NextLink>
      <ColorModeButton />
    </HStack>
  );
};

export default Header;
