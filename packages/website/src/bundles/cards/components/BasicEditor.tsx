import {Box, chakra} from '@chakra-ui/react';
import {Content} from '@tiptap/core';
import {ContentEditor} from '~/editor';

export interface BasicEditorProps {
  frontValue?: Content;
  backValue?: Content;
  setFrontValue: (frontValue: Content) => void;
  setBackValue: (backValue: Content) => void;
}

export const BasicEditor = ({
  frontValue,
  backValue,
  setBackValue,
  setFrontValue,
}: BasicEditorProps) => {
  return (
    <Box as="fieldset">
      <ContentEditor
        value={frontValue}
        onChange={setFrontValue}
        label="Front"
      />
      <chakra.hr w="full" h={1} my={3} />
      <ContentEditor
        tabIndex={0}
        value={backValue}
        onChange={setBackValue}
        label="Back"
      />
    </Box>
  );
};
