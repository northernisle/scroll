import { GetServerSideProps } from 'next';
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';

import theme from 'theme';

interface ChakraColorModeProviderProps {
  cookies?: string;
  children: React.ReactNode;
}

const ChakraColorModeProvider = ({
  cookies,
  children,
}: ChakraColorModeProviderProps) => {
  const colorModeManager = cookies
    ? cookieStorageManager(cookies)
    : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => ({
  props: {
    cookies: req.headers.cookie,
  },
});

export default ChakraColorModeProvider;
