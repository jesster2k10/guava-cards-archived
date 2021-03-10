import React from 'react';
import FilterIcon from '@meronex/icons/bi/BiFilterAlt';
import SearchIcon from '@meronex/icons/bi/BiSearch';
import AddCardIcon from '@meronex/icons/md/MdAddCircleOutline';
import {Section} from '~/shared/section';

export enum DeckSectionActions {
  SEARCH,
  FILTER,
  ADD_CARD,
}

export interface DeckSectionProps {
  title: string;
  actions?: DeckSectionActions[];
  children?: React.ReactNode;
  onAction?: (action: DeckSectionActions, params?: any) => void;
}

export const DeckSection: React.FC<DeckSectionProps> = ({
  title,
  actions = [],
  onAction,
  children,
}) => {
  const iconForAction = (action: DeckSectionActions) => {
    switch (action) {
      case DeckSectionActions.SEARCH:
        return SearchIcon;
      case DeckSectionActions.FILTER:
        return FilterIcon;
      case DeckSectionActions.ADD_CARD:
        return AddCardIcon;
    }
  };

  const rightAside = (
    <>
      {actions.map(action => {
        const Icon = iconForAction(action);
        return <Icon key={action.toString()} />;
      })}
    </>
  );

  return (
    <Section title={title} rightAside={rightAside}>
      {children}
    </Section>
  );
};
