import {Box} from '@chakra-ui/react';
import {AddCardEditor} from '../store';
import {CardType} from './card-type';

interface CardEditorToolbarProps {
  currentEditor: AddCardEditor;
  setCurrentEditor: (editor: AddCardEditor) => void;
}

const CardEditorToolbar = (props: CardEditorToolbarProps) => {
  const {currentEditor, setCurrentEditor} = props;

  return (
    <Box
      d="flex"
      flexDir="row"
      flex="1"
      w="full"
      justifyContent="space-between"
      alignItems="center">
      <CardType value={currentEditor} setValue={setCurrentEditor} />
    </Box>
  );
};

export {CardEditorToolbar};
