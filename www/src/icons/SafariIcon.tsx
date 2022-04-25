import { Icon, IconProps } from '@chakra-ui/react';

const SafariIcon = (props: IconProps) => {
  return (
    <Icon
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      boxSize={5}
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='m8 16 2-6 6-2-2 6-6 2' />
      <circle cx='12' cy='12' r='9' />
    </Icon>
  );
};

export default SafariIcon;
