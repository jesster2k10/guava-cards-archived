import {Page} from '@/layout/page';
import {CardEditor} from '../components/Editor';
import {CardEditorToolbar} from '../components/EditorToolbar';
import {useCardEditorPage} from '../hooks';

export function NewCardPage() {
  const {
    breadcrumbs,
    currentEditor,
    setCurrentEditor,
    editorValue,
    setEditorValue,
  } = useCardEditorPage();

  return (
    <Page title="Add Cards" breadcrumbs={breadcrumbs}>
      <CardEditorToolbar
        currentEditor={currentEditor}
        setCurrentEditor={setCurrentEditor}
      />
      <CardEditor
        editorValue={editorValue}
        setEditorValue={setEditorValue}
        currentEditor={currentEditor}
        mt={5}
      />
    </Page>
  );
}
