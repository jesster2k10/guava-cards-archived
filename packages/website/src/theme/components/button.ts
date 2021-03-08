import layers from '../foundations/layers';

export default {
  baseStyle: {
    rounded: 'sm',
    fontWeight: 'semibold',
    shadow: 'sm',
    borderWidth: 1,
    _hover: { opacity: 0.85 },
  },
  variants: {
    block: layers.block,
    secondary: layers.secondaryButton,
    primary: {
      background: 'blue.500',
      color: 'white',
      borderColor: 'blue.600',
      _hover: {
        '&:disabled': {
          backgroundColor: '#3182ce !important',
        },
      },
    },
    flat: {
      shadow: 'none',
    },
  },
  defaultProps: {
    size: 'sm',
  },
};
