import {Suspense} from 'react';
import {useParams} from 'react-router';
import {DeckDetail} from '../components/DeckDetail';

const ShowDeck = () => {
  const {deckId} = useParams();

  return (
    <Suspense fallback={null}>
      <DeckDetail deckId={deckId} />
    </Suspense>
  );
};

export default ShowDeck;
