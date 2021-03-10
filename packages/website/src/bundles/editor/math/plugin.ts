import {
  chainCommands,
  createParagraphNear,
  deleteSelection,
  joinBackward,
  joinForward,
  liftEmptyBlock,
  newlineInCode,
  selectNodeBackward,
  selectNodeForward,
  splitBlock,
} from 'prosemirror-commands';
import {keymap} from 'prosemirror-keymap';
import {
  EditorState,
  NodeSelection,
  Plugin as ProsePlugin,
  Transaction,
} from 'prosemirror-state';
import {mathBackspace} from './math-backspace';
import {mathInputRules} from './math-inputrules';
import {mathPlugin} from './math-plugin';
import {editorSchema} from './math-schema';
import mathSelectPlugin from './math-select';
import './styles.css';

export function insertMath() {
  const mathType = editorSchema.nodes.inlinemath;
  return function (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined,
  ) {
    const {$from} = state.selection;
    const index = $from.index();
    if (!$from.parent.canReplaceWith(index, index, mathType)) {
      return false;
    }
    if (dispatch) {
      let tr = state.tr.replaceSelectionWith(mathType.create({}));
      tr = tr.setSelection(NodeSelection.create(tr.doc, $from.pos));
      dispatch(tr);
    }
    return true;
  };
}

export const mathPlugins: ProsePlugin[] = [
  mathPlugin,
  mathSelectPlugin,
  keymap({
    'Mod-Space': insertMath(),
    // below is the default keymap
    Enter: chainCommands(
      newlineInCode,
      createParagraphNear,
      liftEmptyBlock,
      splitBlock,
    ),
    'Ctrl-Enter': chainCommands(newlineInCode, createParagraphNear, splitBlock),
    Backspace: chainCommands(
      deleteSelection,
      mathBackspace,
      joinBackward,
      selectNodeBackward,
    ),
    Delete: chainCommands(deleteSelection, joinForward, selectNodeForward),
  }),
  mathInputRules,
];
