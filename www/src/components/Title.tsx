import { useBreakpointValue, Heading, Box } from '@chakra-ui/react';

const Title = () => {
  const size = useBreakpointValue({
    base: '2xl',
    lg: 'xl',
    xl: '2xl',
  });

  return (
    <Heading size={size} textAlign={{ base: 'center', lg: 'start' }}>
      Read your favorite articles{' '}
      <Box color='accent' display='inline'>
        without ads and paywalls
      </Box>
      , in a beautiful scroll.
    </Heading>
  );
};

export default Title;
