import {Box} from '@chakra-ui/layout';
import {css} from '@emotion/react';
import {Editor} from '@tiptap/core';
import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import {useEffect, useRef, useState} from 'react';
import {EditorValue} from '~/editor';

interface ListEditorBlockProps {
  value: EditorValue;
  id: string;
  onChange?: (id: string, value: EditorValue) => void;
}

const extensions = [
  Document,
  Paragraph,
  Text,
  History,
  Typography,
  Underline,
  Italic,
];

const ListEditorBlock = ({value, id, onChange}: ListEditorBlockProps) => {
  const [editor, setEditor] = useState<Mabye<Editor>>();
  const editorRef = useRef<Mabye<HTMLDivElement>>();
  useEffect(() => {
    if (!editorRef.current) return;
    const instance = new Editor({
      element: editorRef.current,
      content: value,
      extensions,
      // onTransaction: () => onChange(id, instance.getJSON() as never),
    });
    setEditor(instance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef]);

  return <Box css={styles} ref={editorRef as never} />;
};

const styles = css`
  .ProseMirror {
    &:focus {
      outline: none;
    }
  }
`;

export {ListEditorBlock};
