import {Box, chakra} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {Content} from '@tiptap/core';
import {ContentEditor} from '~/editor';
import {EditorLabel} from './EditorLabel';

export interface TypeAnswerEditorProps {
  questionValue?: Content;
  answerValue?: string;
  setQuestionValue: (questionValue: Content) => void;
  setAnswerValue: (answerValue: string) => void;
}

export const TypeAnswerEditor = ({
  questionValue,
  answerValue,
  setQuestionValue,
  setAnswerValue,
}: TypeAnswerEditorProps) => {
  return (
    <Box as="fieldset">
      <ContentEditor
        value={questionValue}
        onChange={setQuestionValue}
        label="Question"
      />
      <chakra.hr w="full" h={1} my={3} />
      <EditorLabel mb={3}>Answer</EditorLabel>
      <Input
        value={answerValue}
        onChange={event => setAnswerValue(event.currentTarget.value)}
        placeholder="Type something..."
        _placeholder={{color: 'secondary'}}
      />
    </Box>
  );
};

const Input = styled(chakra.input)`
  background: none;
  width: 100%;
  outline: none;
`;
