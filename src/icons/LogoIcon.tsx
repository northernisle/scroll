import { Icon, IconProps } from '@chakra-ui/react';

const LogoIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
        d='M8 2a3 3 0 0 0-3 3v11H2v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h4V5a3 3 0 0 0-3-3H8zm0 2h8.2a3 3 0 0 0-.2 1v14c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-3H7V5c0-.6.4-1 1-1zm11 0c.6 0 1 .4 1 1v1h-2V5c0-.6.4-1 1-1zM4 18h8v1c0 .4 0 .7.2 1H5a1 1 0 0 1-1-1v-1z'
      />
    </Icon>
  );
};

export default LogoIcon;
