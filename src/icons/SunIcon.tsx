import { Icon, IconProps } from '@chakra-ui/react';

const SunIcon = (props: IconProps) => {
  return (
    <Icon
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <circle cx='12' cy='12' r='4' />
      <path d='M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7' />
    </Icon>
  );
};

export default SunIcon;
