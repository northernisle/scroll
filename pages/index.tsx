import { Center, Fade } from '@chakra-ui/react';

import { Header } from 'components';

const Home = () => {
  return (
    <Center as={Fade} in mx='auto' maxW='container.lg'>
      <Header />
    </Center>
  );
};

export default Home;
