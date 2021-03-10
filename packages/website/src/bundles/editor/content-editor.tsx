import {Box, BoxProps} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {Content, Editor, Extensions} from '@tiptap/core';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import {defaultExtensions} from '@tiptap/starter-kit';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {EditorContext} from './context';
import {MathExtension} from './math';
import {MenuBar} from './menu-bar';

export type EditorValue = Content;
interface ContentEditorProps extends Omit<BoxProps, 'value' | 'onChange'> {
  value?: EditorValue;
  onChange: (value: EditorValue) => void;
  children?: React.ReactNode;
  autofocus?: boolean;
  placeholder?: string;
  label?: string;
}

const ContentEditor = (props: ContentEditorProps) => {
  const {
    value,
    onChange,
    children,
    tabIndex,
    placeholder = 'Type something...',
    autofocus,
    label,
    ...rest
  } = props;
  const [editor, setEditor] = useState<Editor | null>(null);
  const editorRef = useRef<HTMLDivElement | null | undefined>();

  const getExtensions = () => [
    ...defaultExtensions({
      heading: {
        levels: [1, 2, 3],
      },
    }),
    Highlight,
    Underline,
    MathExtension,
  ];

  const extensions: Extensions = useMemo(getExtensions, []);

  useEffect(() => {
    if (!editorRef.current) return;
    const instance = new Editor({
      element: editorRef.current,
      content: value || ``,
      extensions,
    }).on('transaction', () => onChange(instance.getJSON() as never));
    setEditor(instance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef]);

  const placeholderVisible = editor?.isEmpty();

  return (
    <EditorContext.Provider value={{editor}}>
      <Wrapper pos="relative" {...rest}>
        {editorRef.current && (
          <>
            <MenuBar label={label} />
            {placeholderVisible && (
              <Box pos="absolute" color="secondary">
                {placeholder}
              </Box>
            )}
            {children}
          </>
        )}
        <div tabIndex={tabIndex} ref={editorRef as never} />
      </Wrapper>
    </EditorContext.Provider>
  );
};

const Wrapper = styled(Box)`
  .ProseMirror {
    &:focus {
      outline: none;
    }

    h1 {
      font-size: 1.25rem;
    }

    h2 {
      font-size: 1.15rem;
    }

    h3 {
      font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
      font-weight: 700;
    }

    ul,
    ol {
      padding: 0 1.2rem;
    }

    pre {
      font-family: JetBrainsMono, 'Courier New', Courier, monospace;
      background: var(--background-alt-hover);
      color: var(--text);
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      whitespace: pre-wrap;

      code {
        color: inherit;
        background: none;
        font-size: 0.8rem;
      }
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(13, 13, 13, 0.1);
    }
  }
`;

ContentEditor.defaultProps = {
  children: null,
};

export {ContentEditor};
