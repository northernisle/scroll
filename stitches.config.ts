import {
  mauve,
  mauveDark,
  tomato,
  tomatoDark,
  red,
  redDark,
  crimson,
  crimsonDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  purple,
  purpleDark,
  violet,
  violetDark,
  blue,
  blueDark,
  green,
  greenDark,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

// https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale

const theme = {
  light: {
    ...mauve,
    ...tomato,
    ...red,
    ...crimson,
    ...pink,
    ...plum,
    ...purple,
    ...violet,
    ...blue,
    ...green,
  },
  dark: {
    ...mauveDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...blueDark,
    ...greenDark,
  },
};

export const { styled, getCssText } = createStitches({
  theme: {},
});
