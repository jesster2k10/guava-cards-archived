import {mode} from '@chakra-ui/theme-tools';

export default {
  global: (props: any) => ({
    body: {
      bg: mode('bg.light', 'bg.dark')(props),
    },
  }),
};
