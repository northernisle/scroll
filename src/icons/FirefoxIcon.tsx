import { Icon, IconProps } from '@chakra-ui/react';

const FirefoxIcon = (props: IconProps) => {
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
      <path d='M4.03 7.82a9 9 0 1 0 12.82-3.4C15.21 3.4 13.8 3.4 12 3.4h-1.65' />
      <path d='M4.91 9.48c-1.75-1.56-.8-5.38.11-6.17.09.9.59 1.21 1.11 1.69.88-.28 1.32-.28 1.87 0 .82-.91 1.7-2.35 2.63-2.1-1.08 1.75-.07 3.74 1.37 4.18-.17.97-1.48 1.91-2.76 2.69-1.3.93-.72 1.85 0 2.23.95.5 3.61-1 4.54.35-1.7.1-1.53 3.11-3.98 2.73 2.52.96 4.35.46 5.46-.34a6.97 6.97 0 0 0 2.88-5.56c-.02-1.4.2-2.7-1.26-4.75' />
    </Icon>
  );
};

export default FirefoxIcon;
