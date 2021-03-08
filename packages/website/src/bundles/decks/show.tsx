import {Suspense} from 'react';
import {useParams} from 'react-router';
import {Page} from '@/layout/page';
import {DeckDetail} from './templates/detail';
import {Breadcrumbs} from '@/layout/page/breadcrumbs';
import {paths} from '@/application/paths';

const ShowDeck = () => {
  const {deckId} = useParams();

  return (
    <Suspense fallback={null}>
      <DeckDetail deckId={deckId} />
    </Suspense>
  );
};

export default ShowDeck;
