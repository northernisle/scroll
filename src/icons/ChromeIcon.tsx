import { Icon, IconProps } from '@chakra-ui/react';

const ChromeIcon = (props: IconProps) => {
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
      <circle cx='12' cy='12' r='9' />
      <circle cx='12' cy='12' r='3' />
      <path d='M12 9h8.4m-5.8 4.5-4.2 7.3m-1-7.3L5.2 6.2' />
    </Icon>
  );
};

export default ChromeIcon;
