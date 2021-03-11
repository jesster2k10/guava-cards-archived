import type {Editor} from '@tiptap/core';
import {createContext, useContext} from 'react';

interface EditorContextValue {
  editor: Editor | null;
}

export const EditorContext = createContext({} as EditorContextValue);
export const useEditor = () => {
  const {editor} = useContext(EditorContext);
  return editor!;
};
