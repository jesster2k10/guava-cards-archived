import {Extension, Mark, mergeAttributes, Node} from '@tiptap/core';
import {mathPlugins} from './plugin';

export const MathExtension = Extension.create({
  name: 'Math',
  addProseMirrorPlugins() {
    return mathPlugins;
  },
});

export const MathDisplayNode = Node.create<HTMLDivElement>({
  name: 'mathDisplay',
  content: 'text*',
  atom: true,
  code: true,
  group: 'block math',
  parseHTML: () => [{tag: 'math-display'}],
  renderHTML: ({HTMLAttributes}) => [
    'math-display',
    mergeAttributes(HTMLAttributes, {class: 'math-node'}),
    0,
  ],
});

export const MathInlineNode = Node.create<HTMLDivElement>({
  name: 'mathInline',
  content: 'text*',
  inline: true,
  atom: true,
  parseHTML: () => [{tag: 'math-inline'}],
  renderHTML: ({HTMLAttributes}) => [
    'math-inline',
    mergeAttributes(HTMLAttributes, {class: 'math-node'}),
    0,
  ],
});

const MathSelectMark = Mark.create({
  name: 'mathSelect',
  parseHTML: () => [{tag: 'math-select'}],
  renderHTML: ({HTMLAttributes}) => ['math-seelct', HTMLAttributes, 0],
});
