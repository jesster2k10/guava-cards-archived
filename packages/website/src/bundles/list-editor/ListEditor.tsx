import {ListEditorBlockType} from '~/cards/store';
import {ListEditorBlock} from './ListEditorBlock';

export interface ListEditorProps {
  blocks: ListEditorBlockType[];
  setBlocks: (blocks: ListEditorBlockType[]) => void;
}

const ListEditor = ({blocks, setBlocks}: ListEditorProps) => {
  return (
    <div>
      {blocks.map(block => (
        <ListEditorBlock id={block.id} value={block.value} />
      ))}
    </div>
  );
};

export {ListEditor};
