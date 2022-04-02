import { getOutlineVariants } from 'theme/helpers';

import Button from './Button';
import Input from './Input';
import Link from './Link';

const components = {
  Select: getOutlineVariants(),
  Button,
  Input,
  Link,
};

export default components;
