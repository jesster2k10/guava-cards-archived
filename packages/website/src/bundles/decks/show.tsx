import {Suspense} from 'react';
import {useParams} from 'react-router';
import {DeckDetail} from './templates/detail';

const ShowDeck = () => {
  const {deckId} = useParams();

  return (
    <Suspense fallback={null}>
      <DeckDetail deckId={deckId} />
    </Suspense>
  );
};

export default ShowDeck;
