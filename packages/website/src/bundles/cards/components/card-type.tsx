import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ScaleFade,
} from '@chakra-ui/react';
import {CardType as ICardType} from '@guava/database';
import CheckIcon from '@meronex/icons/bi/BiCheck';
import ChevronDown from '@meronex/icons/en/EnChevronSmallDown';
import {infoForCardType} from '../utils/types';

export interface CardTypeProps {
  options?: ICardType[];
  value: ICardType;
  setValue: (value: ICardType) => void;
}

const CardType = ({
  options = ['basic', 'cloze', 'list', 'type-answer'],
  value,
  setValue,
}: CardTypeProps) => {
  const {title: currentTitle} = infoForCardType(value);

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as="div" role="button">
        <Box w="max-content" d="flex" alignItems="center" flexDir="row">
          <Box mr={1} noOfLines={1} w="full" fontSize="sm" fontWeight="medium">
            {`${currentTitle} Card` || 'Select'}
          </Box>
          <ChevronDown />
        </Box>
      </MenuButton>
      <MenuList w="25rem">
        {options.map(option => {
          const {title, info} = infoForCardType(option);
          return (
            <MenuItem
              key={option}
              d="flex"
              flexDir="row"
              justifyContent="space-between"
              alignItems="flex-start"
              onClick={() => setValue(option)}>
              <Box mr={3} d="flex" flexDir="column">
                <Box fontWeight="medium" fontSize="0.8rem">
                  {title}
                </Box>
                <Box fontSize="xs" color="secondary">
                  {info}
                </Box>
              </Box>
              <ScaleFade in={value === option}>
                <Box fontSize="lg" fontWeight="medium">
                  <CheckIcon />
                </Box>
              </ScaleFade>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export {CardType};
