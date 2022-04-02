import { useColorMode, IconButton } from '@chakra-ui/react';

import { SunIcon, MoonIcon } from 'icons';

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      isRound
      aria-label='Color mode'
      onClick={toggleColorMode}
      icon={
        colorMode === 'dark' ? (
          <SunIcon boxSize={5} />
        ) : (
          <MoonIcon boxSize={5} />
        )
      }
    />
  );
};

export default ColorModeButton;
