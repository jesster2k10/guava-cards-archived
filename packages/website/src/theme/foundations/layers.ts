const block = {
  transition: 'all ease-in-out 110ms',
  borderRadius: 0,
  width: '100%',
  textAlign: 'left',
  height: 'auto',
  justifyContent: 'flex-start',
  py: 2.5,
  fontWeight: 'medium',
  fontSize: '0.85rem',
  _hover: {
    backgroundColor: 'altHover',
  },
  '&.active': {
    backgroundColor: 'altHover',
  },
};

const layers = {
  block,
  secondaryButton: {
    color: 'secondary',
    _hover: {color: 'text'},
    transition: 'var(--transition)',
    fontSize: 'xs',
    fontWeight: 'medium',
    textTransform: 'none',
  },
  menu: {
    wrapper: {
      position: 'absolute',
      background: 'background',
      maxWidth: 250,
      minWidth: 200,
      shadow: 'md',
      rounded: 'sm',
      borderWidth: 0.5,
      fontSize: 'sm',
      py: 2,
    },
    list: {
      listStyleType: 'none',
    },
    item: {
      ...block,
      width: '100%',
      px: 2,
      py: 1,
      fontWeight: 'regular',
      d: 'flex',
      alignItems: 'center',
    },
    group: {
      wrapper: {
        display: 'flex',
        flexDir: 'column',
      },
      header: {
        px: 2,
        mb: 1,
        fontSize: 'xs',
        fontWeight: 'medium',
      },
      footer: {
        fontSize: 'xs',
        color: 'secondary',
        px: 2,
        borderTopWidth: 1,
        paddingTop: 1,
        marginTop: 1,
        mb: 1,
        '&:last-child': {
          mb: 0,
          borderBottomWidth: 0,
        },
      },
    },
  },
  lists: {
    slash: {
      listStyleType: 'none',
      d: 'flex',
      flexDir: 'row',
      alignItems: 'center',
      fontSize: '0.75rem',
      fontWeight: 'medium',
      li: {
        '&:after': {
          content: '"/"',
          mx: '0.4rem',
        },
        '&:last-child': {
          '&:after': {
            display: 'none',
          },
        },
      },
      a: {
        transition: 'all ease-in-out 100ms',
        '&:hover': {
          textDecoration: 'underline',
          opacity: 0.8,
        },
      },
    },
    bullet: {},
  },
};

export default layers;
