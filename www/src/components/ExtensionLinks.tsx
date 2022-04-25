import {
  useBreakpointValue,
  HStack,
  Button,
  IconButton,
} from '@chakra-ui/react';

import { FirefoxIcon, ChromeIcon, SafariIcon, EdgeIcon } from 'icons';

const extensions = [
  {
    label: 'Firefox',
    icon: <FirefoxIcon />,
    colorScheme: 'orange',
  },
  {
    label: 'Chrome',
    icon: <ChromeIcon />,
    colorScheme: 'red',
  },
  {
    label: 'Safari',
    icon: <SafariIcon />,
    colorScheme: 'blue',
  },
  {
    label: 'Edge',
    icon: <EdgeIcon />,
    colorScheme: 'teal',
  },
];

const ExtensionLinks = () => {
  const width = useBreakpointValue({ base: '100%', lg: 'initial' });
  const variant = useBreakpointValue({ base: 'icon', sm: 'button' }) ?? 'icon';

  return (
    <HStack width={width}>
      {extensions.map(({ label, icon, colorScheme }) =>
        variant === 'icon' ? (
          <IconButton
            size='lg'
            key={label}
            width={width}
            icon={icon}
            variant='outline'
            colorScheme={colorScheme}
            aria-label={label}
          />
        ) : (
          <Button
            size='lg'
            key={label}
            width={width}
            rightIcon={icon}
            variant='outline'
            colorScheme={colorScheme}
          >
            {label}
          </Button>
        )
      )}
    </HStack>
  );
};

export default ExtensionLinks;
