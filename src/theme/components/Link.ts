import { ComponentSingleStyleConfig } from '@chakra-ui/react';

const Link: ComponentSingleStyleConfig = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
};

export default Link;
