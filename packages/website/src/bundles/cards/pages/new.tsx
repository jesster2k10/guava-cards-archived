import {Page} from '@/layout/page';
import {chakra} from '@chakra-ui/react';
import {ContentEditor} from '~/editor';
import {CardEditorToolbar} from '../components/toolbar';
import {useCardEditorPage} from '../hooks';

export function NewCardPage() {
  const {
    breadcrumbs,
    currentEditor,
    setCurrentEditor,
    editorValues,
    setEditorValue,
  } = useCardEditorPage();

  return (
    <Page title="Add Cards" breadcrumbs={breadcrumbs}>
      <CardEditorToolbar
        currentEditor={currentEditor}
        setCurrentEditor={setCurrentEditor}
      />
      <ContentEditor
        value={editorValues.front}
        onChange={value => setEditorValue('front', value)}
        label="Front"
        mt={5}
      />
      <chakra.hr w="full" h={1} my={3} />
      <ContentEditor
        value={editorValues.back}
        onChange={value => setEditorValue('back', value)}
        label="Back"
      />
    </Page>
  );
}
