import {Box, chakra, SlideFade} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {useEditor} from './EditorContext';
import * as Icons from './EditorIcons';
import {MenuAction} from './MenuAction';

interface MenuBarProps {
  label?: string;
}

export const MenuBar = ({label}: MenuBarProps) => {
  const editor = useEditor();
  const isVisible = editor.isFocused || !editor.isEmpty();
  const [focused, setFocused] = useState(editor.isFocused);
  const [toggledAction, setToggledAction] = useState(false);

  const toggleHeading = (level: any) => {
    editor.chain().focus().toggleHeading({level}).run();
  };
  const separator = (
    <chakra.span w="1px" h={5} bg="borderLight" ml={2} mr={3} />
  );

  useEffect(() => {
    if (toggledAction && editor.isFocused) {
      setToggledAction(false);
    } else {
      setFocused(editor.isFocused);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor.isFocused]);

  return (
    <Box pos="relative">
      <SlideFade
        style={{position: 'absolute', pointerEvents: 'none'}}
        in={!editor.isFocused}>
        <Box
          css={{pointerEvents: 'none'}}
          fontSize="md"
          fontWeight="semibold"
          as="h2">
          {label}
        </Box>
      </SlideFade>
      <SlideFade in={editor.isFocused}>
        <Box
          d="flex"
          alignItems="center"
          flexDir="row"
          mb={3}
          borderColor="borderLight"
          width="min-content"
          pointerEvents={isVisible ? 'auto' : 'none'}>
          <MenuAction
            Icon={Icons.BoldIcon}
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive('bold')}
            label="Toggle bold"
          />
          <MenuAction
            Icon={Icons.UnderlineIcon}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive('underline')}
            label="Toggle underline"
          />
          <MenuAction
            Icon={Icons.StrikeIcon}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            active={editor.isActive('strike')}
            label="Toggle strike through"
          />
          <MenuAction
            Icon={Icons.ItalicIcon}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive('italic')}
            label="Toggle italics"
          />
          <MenuAction
            Icon={Icons.HighlightIcon}
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            active={editor.isActive('highlight')}
            label="Toggle highlight"
          />
          <MenuAction
            Icon={Icons.BlockquoteIcon}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive('blockquote')}
            label="Toggle blockquote"
          />
          {separator}
          <MenuAction
            Icon={Icons.H1Icon}
            onClick={() => toggleHeading(1)}
            active={editor.isActive({heading: {level: 1}})}
            label="Toggle heading 1"
          />
          <MenuAction
            Icon={Icons.H2Icon}
            onClick={() => toggleHeading(2)}
            active={editor.isActive({heading: {level: 2}})}
            label="Toggle heading 2"
          />
          <MenuAction
            Icon={Icons.H3Icon}
            onClick={() => toggleHeading(3)}
            active={editor.isActive({heading: {level: 3}})}
            label="Toggle heading 3"
          />
          <MenuAction
            Icon={Icons.UnorderedListIcon}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive('bulletList')}
            label="Toggle bullet list"
          />
          <MenuAction
            Icon={Icons.OrderedListIcon}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive('orderedList')}
            label="Toggle ordered list"
          />
          <MenuAction
            Icon={Icons.CodeIcon}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editor.isActive('codeBlock')}
            label="Toggle heading 3"
          />
          {/* <MenuAction
          Icon={Icons.ImagesIcon}
          onClick={() => toggleHeading(3)}
          active={editor.isActive({ heading: { level: 3 } })}
          label="Toggle heading 3"
        />
        <MenuAction
          Icon={Icons.AudioIcon}
          onClick={() => toggleHeading(3)}
          active={editor.isActive({ heading: { level: 3 } })}
          label="Toggle heading 3"
        /> */}
          {separator}
          <MenuAction
            Icon={Icons.UndoIcon}
            onClick={() => editor.chain().undo().run()}
            label="Undo"
          />
          <MenuAction
            Icon={Icons.RedoIcon}
            onClick={() => editor.chain().redo().run()}
            label="Redo"
          />
        </Box>
      </SlideFade>
    </Box>
  );
};
