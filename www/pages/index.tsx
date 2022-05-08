import { Container, Fade } from '@chakra-ui/react';

import { Header, Body } from 'components';

const Home = () => {
  return (
    <Container centerContent h='100%' maxW='container.xl'>
      <Header />
      <Body />
    </Container>
  );
};

export default Home;
