import {css, Global} from '@emotion/react';
import {useColorMode, useTheme} from '@chakra-ui/react';

const Styles = () => {
  const {colorMode} = useColorMode();
  const {colors} = useTheme();

  return (
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
          width: 100%;
          background: ${colors.bg};
        }

        .sidebar-link {
          color: ${colorMode === 'light'
            ? 'rgba(0, 0, 0, 0.6)'
            : 'rgba(255, 255, 255, 0.6)'};
          &.active,
          &:hover {
            color: ${colorMode === 'light' ? 'black' : 'white'};
          }
        }
      `}
    />
  );
};

export {Styles};
