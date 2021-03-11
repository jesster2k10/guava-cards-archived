import {paths} from '@/application/paths';
import {BoxProps, chakra} from '@chakra-ui/react';
import {Deck} from '@guava/database';
import AddToQueueIcon from '@meronex/icons/bi/BiAddToQueue';
import EditIcon from '@meronex/icons/bi/BiEdit';
import FolderIcon from '@meronex/icons/bi/BiFolder';
import StudyIcon from '@meronex/icons/bi/BiPlayCircle';
import SortDownIcon from '@meronex/icons/bi/BiSortDown';
import SortUpIcon from '@meronex/icons/bi/BiSortUp';
import dayjs from 'dayjs';
import {ContextMenu} from '~/shared/context-menu';
import {Link} from '~/shared/link';

export type DeckItemVariant = 'summary' | 'expanded';

export interface DeckItemProps extends BoxProps {
  deck: Deck;
  variant?: DeckItemVariant;
}

const DeckItem = ({deck, variant = 'summary', ...props}: DeckItemProps) => {
  // const navigate = useNavigate()

  return (
    <ContextMenu>
      <ContextMenu.Group key="study" header={deck.displayName}>
        <ContextMenu.Item title="Study" Icon={StudyIcon} />
      </ContextMenu.Group>
      <ContextMenu.Group key="default">
        <ContextMenu.Item title="Edit" Icon={EditIcon} />
        <ContextMenu.Item title="Add Card" Icon={AddToQueueIcon} />
        <ContextMenu.Item title="Add to Folder" Icon={FolderIcon} />
      </ContextMenu.Group>
      <ContextMenu.Group
        key="move"
        footer={`Created ${dayjs(deck.createdAt).format('lll')}`}>
        <ContextMenu.Item title="Move Up" Icon={SortUpIcon} />
        <ContextMenu.Item title="Add Down" Icon={SortDownIcon} />
      </ContextMenu.Group>
      <ContextMenu.Children>
        <Link
          d="flex"
          alignItems="center"
          layerStyle="block"
          data-testid="deck-item"
          px={3}
          py={1}
          mb={0.5}
          to={paths.decks.show(deck)}
          {...(props as any)}>
          <chakra.figure mr="2">{deck.emoji}</chakra.figure>
          <chakra.div flex="1" noOfLines={1}>
            {deck.name}
          </chakra.div>
          <chakra.span fontSize="xs" color="secondary">
            {deck.cardCount}
          </chakra.span>
        </Link>
      </ContextMenu.Children>
    </ContextMenu>
  );
};

export {DeckItem};
