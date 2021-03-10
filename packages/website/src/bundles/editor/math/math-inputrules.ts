import {InputRule, inputRules} from 'prosemirror-inputrules';
import {NodeType} from 'prosemirror-model';
import {NodeSelection} from 'prosemirror-state';
import {editorSchema} from './math-schema';

export function inlineInputRule(
  pattern: RegExp,
  nodeType: NodeType,
  getAttrs?: (match: string[]) => any,
) {
  return new InputRule(pattern, (state, match, start, end) => {
    const $start = state.doc.resolve(start);
    const index = $start.index();
    const $end = state.doc.resolve(end);
    // get attrs
    const attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    // check if replacement valid
    if (!$start.parent.canReplaceWith(index, $end.index(), nodeType)) {
      return null;
    }
    // perform replacement
    return state.tr.replaceRangeWith(
      start,
      end,
      nodeType.create(attrs, nodeType.schema.text(match[1])),
    );
  });
}

export function blockInputRule(
  pattern: RegExp,
  nodeType: NodeType,
  getAttrs?: (match: string[]) => any,
) {
  return new InputRule(pattern, (state, match, start, end) => {
    const $start = state.doc.resolve(start);
    const attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    console.log($start, attrs);
    if (
      !$start
        .node(-1)
        .canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType)
    )
      return null;
    const tr = state.tr
      .delete(start, end)
      .setBlockType(start, start, nodeType, attrs);

    return tr.setSelection(
      NodeSelection.create(tr.doc, tr.mapping.map($start.pos - 1)),
    );
  });
}

export const mathInputRules = inputRules({
  rules: [
    // negative lookbehind regex notation for escaped \$ delimiters
    // (see https://javascript.info/regexp-lookahead-lookbehind)
    inlineInputRule(
      /[^\\]?\$([^$\n\\]+)[^\\][\$]/,
      editorSchema.nodes.math_inline,
    ),
    // simpler version without the option to escape \$
    // inlineInputRule(/\$(.+)\$/, editorSchema.nodes.math_inline),
    blockInputRule(/^\$\$\s+$/, editorSchema.nodes.math_display),
  ],
});
