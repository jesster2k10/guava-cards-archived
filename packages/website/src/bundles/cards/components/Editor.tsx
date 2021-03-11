import {Box, BoxProps} from '@chakra-ui/react';
import {AddCardEditor, AllEditorValues} from '../types';
import {BasicEditor} from './BasicEditor';
import {ListEditor} from './ListEditor';
import {TypeAnswerEditor} from './TypeAnswerEditor';

export interface EditorProps extends BoxProps {
  editorValue: Partial<AllEditorValues>;
  setEditorValue: (value: Partial<AllEditorValues>) => void;
  currentEditor: AddCardEditor;
}

export const CardEditor = ({
  editorValue,
  setEditorValue,
  currentEditor,
  ...props
}: EditorProps) => {
  const content = (() => {
    switch (currentEditor) {
      case 'basic':
        return (
          <BasicEditor
            frontValue={editorValue.front}
            backValue={editorValue.back}
            setFrontValue={front => setEditorValue({...editorValue, front})}
            setBackValue={back => setEditorValue({...editorValue, back})}
          />
        );
      case 'list':
        return (
          <ListEditor
            blocks={editorValue.blocks || []}
            setBlocks={blocks => setEditorValue({...editorValue, blocks})}
            questionValue={editorValue.question}
            setQuestionValue={question =>
              setEditorValue({...editorValue, question})
            }
          />
        );
      case 'typeAnswer':
        return (
          <TypeAnswerEditor
            questionValue={editorValue.question}
            setQuestionValue={question =>
              setEditorValue({...editorValue, question})
            }
            answerValue={editorValue.answer}
            setAnswerValue={answer => setEditorValue({...editorValue, answer})}
          />
        );
      default:
        return null;
    }
  })();

  return <Box {...props}>{content}</Box>;
};
