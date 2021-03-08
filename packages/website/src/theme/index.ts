import {extendTheme, FormLabel} from '@chakra-ui/react';

import colors from './foundations/colors';
import textStyles from './foundations/text';
import layerStyles from './foundations/layers';
import borders from './foundations/borders';
import styles from './foundations/styles';
import Button from './components/button';
import Box from './components/box';
import Link from './components/link';
import Modal from './components/modal';
import Input from './components/input';
import Heading from './components/heading';

FormLabel.defaultProps = {fontSize: 'sm'};

export const theme = extendTheme({
  colors,
  borders,
  styles,
  layerStyles,
  textStyles,
  fonts: {
    serif: '-apple-system-ui-serif, ui-serif, Georgia, Times, serif',
  },
  components: {
    Box,
    Button,
    Link,
    Modal,
    Input,
    Heading,
  },
  config: {
    initialColorMode:
      typeof window !== 'undefined' ? (window as any).colorMode : 'light',
  },
});
