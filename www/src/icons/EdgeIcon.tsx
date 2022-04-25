import { Icon, IconProps } from '@chakra-ui/react';

const EdgeIcon = (props: IconProps) => {
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
      <path d='M20.98 11.37a9 9 0 1 0-1.6 5.78' />
      <path d='M20.98 11.37c.2 3-5.04 2.42-6.91 1.49 1.39-1.6.4-4.04-2.28-3.85-1.74.12-2.93 1.15-2.78 3.2.28 3.99 4.44 6.2 10.36 4.79' />
      <path d='M3.02 12.63c-.28-4.05 8.72-7.23 11.25-2.69m-1.64 11.04c-3 .2-5.16-4.73-3.57-9.75' />
    </Icon>
  );
};

export default EdgeIcon;
