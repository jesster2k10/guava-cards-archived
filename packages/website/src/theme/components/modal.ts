// import {ModalContent} from '@chakra-ui/react';

// ModalContent.defaultProps = {
//   rounded: 'sm',
//   background: 'bgAlt',
//   shadow: 'md',
//   borderWidth: '0.5px',
//   borderColor: 'borderLight',
// };

export default {
  parts: ['modal', 'content', 'header', 'body', 'closeButton'],
  baseStyle: {
    modal: {},
    content: {
      borderRadius: 0,
      backgroundColor: 'red',
    },
    header: {
      fontSize: 'md',
      px: 3,
      py: 2,
      borderBottomWidth: 1,
      borderColor: 'borderLight',
    },
    body: {
      px: 3,
      py: 3,
    },
    closeButton: {
      top: '0.25rem',
      right: '0.5rem',
    },
  },
  defaultProps: {},
};
