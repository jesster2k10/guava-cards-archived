import {Extension} from '@tiptap/core';
import {mathPlugins} from './plugin';

export const MathExtension = Extension.create({
  name: 'Math',
  addProseMirrorPlugins() {
    console.log('hi');
    return mathPlugins;
  },
});
