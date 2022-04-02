import { Icon, IconProps } from '@chakra-ui/react';

const MoonIcon = (props: IconProps) => {
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
      <path d='M12 3h.4a7.5 7.5 0 0 0 8 12.4A9 9 0 1 1 12 3z' />
    </Icon>
  );
};

export default MoonIcon;
