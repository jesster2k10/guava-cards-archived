import layers from '../foundations/layers';

const Menu = {
  parts: ['menu', 'item', 'icon', 'button', 'list'],
  baseStyle: {
    list: {
      ...layers.menu.wrapper,
    },
    item: {
      ...layers.menu.item,
    },
    button: {
      fontSize: 'sm',
    },
    icon: {
      fontSize: 'xl',
    },
  },
};

export default Menu;
