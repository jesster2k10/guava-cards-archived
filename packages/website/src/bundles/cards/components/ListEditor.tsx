/* eslint-disable no-return-assign */
import {uid} from '@/utils/uid';
import {Box, chakra} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {Content} from '@tiptap/core';
import isEmpty from 'lodash/isEmpty';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
} from 'react';
import {ContentEditor} from '~/editor';
import {ListEditorBlockType} from '../types';

export interface ListEditorProps {
  questionValue?: Content;
  blocks: ListEditorBlockType[];
  setQuestionValue: (questionValue: Content) => void;
  setBlocks: (blocks: ListEditorBlockType[]) => void;
}

export const ListEditor = ({
  blocks = [],
  setBlocks,
  questionValue,
  setQuestionValue,
}: ListEditorProps) => {
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const emptyBlock = () => {
    return {
      id: uid(),
      value: '',
    };
  };

  const handleKeyDown = (
    block: ListEditorBlockType,
    index: number,
  ): KeyboardEventHandler<HTMLInputElement> => event => {
    const {key, keyCode} = event;
    if (key === 'Enter' && !isEmpty(event.currentTarget.value)) {
      setBlocks([...blocks, emptyBlock()]);
    }

    if (keyCode === 8 && isEmpty(event.currentTarget.value)) {
      const updatedBlocks = blocks.filter(item => item.id !== block.id);
      const nextIndex = index - 1;
      const nextBlock = blocks[nextIndex];
      setBlocks(updatedBlocks);

      if (nextBlock && inputRefs.current) {
        const input = inputRefs.current[nextBlock.id];
        input?.focus();
        return true;
      }

      return false;
    }

    return true;
  };

  const handleChange = (
    block: ListEditorBlockType,
    index: number,
  ): ChangeEventHandler<HTMLInputElement> => event => {
    const updatedBlock = {
      ...block,
      value: event.currentTarget.value,
    };
    const updatedBlocks = [
      ...blocks.slice(0, index),
      updatedBlock,
      ...blocks.slice(index + 1),
    ];
    setBlocks(updatedBlocks);
  };

  useEffect(() => {
    if (blocks.length === 0) {
      setBlocks([emptyBlock()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks]);

  return (
    <Box as="fieldset">
      <ContentEditor
        value={questionValue}
        onChange={setQuestionValue}
        label="Question"
      />
      <chakra.hr w="full" h={1} my={3} />
      <Box fontSize="md" fontWeight="semibold" as="h2" mb={3}>
        Answers
      </Box>
      <Box as="ol" ml={5}>
        {blocks.map((block, index) => (
          <Box mb={1} as="li" key={block.id} id={block.id}>
            <Input
              ref={value => (inputRefs.current[block.id] = value)}
              value={block.value ?? ''}
              placeholder="Type something..."
              onChange={handleChange(block, index)}
              onKeyDown={handleKeyDown(block, index)}
              autoFocus
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Input = styled(chakra.input)`
  background: none;
  width: 100%;
  outline: none;
`;
