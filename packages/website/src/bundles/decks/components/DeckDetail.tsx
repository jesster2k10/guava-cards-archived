import {paths} from '@/application/paths';
import {Page} from '@/layout/page';
import {Breadcrumbs} from '@/layout/page/breadcrumbs';
import {Button, HStack, VStack} from '@chakra-ui/react';
import {useFindSuspense, useObservableValue} from '@guava/core';
import ClockIcon from '@meronex/icons/ai/AiOutlineClockCircle';
import CardsIcon from '@meronex/icons/mdc/MdcCardsOutline';
import dayjs from 'dayjs';
import {useMemo} from 'react';
import {useNavigate} from 'react-router';
import {IconText} from '~/shared/IconText';
import {List} from '~/shared/List';
import {DeckSection, DeckSectionActions} from './DeckSection';

export interface DeckDetailProps {
  deckId: string;
}

const DeckDetail = ({deckId}: DeckDetailProps) => {
  const deck = useFindSuspense('decks', deckId);
  const cards$ = useMemo(() => deck.cards.observe(), [deck]);
  const cards = useObservableValue(cards$, []);
  const navigate = useNavigate();

  const breadcrumbs: Breadcrumbs = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: paths.decks.root,
      title: 'Decks',
    },
    {
      path: paths.decks.show(deckId),
      title: deck.displayName,
    },
  ];

  return (
    <Page
      title={deck.displayName}
      subtitle={deck.detail}
      breadcrumbs={breadcrumbs}
      titleAside={
        <Button
          variant="flat"
          size="sm"
          onClick={() => navigate(paths.cards.add(deck))}>
          Add Card
        </Button>
      }>
      <HStack
        mb={4}
        mt={!deck.detail ? -1 : 0}
        color="secondary2"
        fontSize="xs">
        <IconText
          Icon={ClockIcon}
          text={`Created ${dayjs(deck.createdAt).format('lll')}`}
        />
        <IconText Icon={CardsIcon} text={`${deck.cardCount} cards`} />
      </HStack>
      <VStack align="flex-start" w="full">
        <DeckSection title="Due Soon" />
        <DeckSection
          title={`Cards (${deck.cardCount})`}
          actions={[DeckSectionActions.ADD_CARD]}>
          <List
            data={cards}
            keyExtractor={card => card.id}
            emptyStateMessage="No cards have been added to this deck"
          />
        </DeckSection>
      </VStack>
    </Page>
  );
};

export {DeckDetail};
