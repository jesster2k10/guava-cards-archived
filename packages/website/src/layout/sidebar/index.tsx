/**
 * Created by Jesse Onolememen. 26/02/2021
 */

import {chakra} from '@chakra-ui/react';
import {useSidebar} from '@guava/core';
import BisCog from '@meronex/icons/bi/BisCog';
import BsFillPeopleFill from '@meronex/icons/bs/BsFillPeopleFill';
import FaChartPie from '@meronex/icons/fa/FaChartPie';
import HiHome from '@meronex/icons/hi/HiHome';
import MdAdd from '@meronex/icons/ios/MdAdd';
import MdcCloudSync from '@meronex/icons/mdc/MdcCloudSync';
import {DeckList} from '../../bundles/decks/organisms/DeckList';
import {SidebarFooter} from './footer';
import {SidebarGroup} from './group';
import {SidebarHeader} from './header';
import {SidebarLink} from './link';

// import {AddDeck} from '../../bundles/decks/components/add';

const WIDTH = 240;

const Sidebar = () => {
  const {decks, addDeckIsOpen, openAddDeck, createDeck} = useSidebar();

  return (
    <chakra.aside
      id="sidebar"
      backgroundColor="bgAlt"
      borderRightWidth={0.5}
      width={WIDTH}
      display="flex"
      flexDir="column"
      position="fixed"
      left={0}
      top={0}
      bottom={0}>
      <SidebarHeader />
      <chakra.div flex="1">
        <SidebarGroup mb={5} mt={3}>
          <SidebarLink title="Home" to="/" Icon={HiHome} />
          <SidebarLink title="Stats" to="/stats" Icon={FaChartPie} />
          <SidebarLink title="Shared" to="/share" Icon={BsFillPeopleFill} />
          <SidebarLink title="Sync" to="/settings/sync" Icon={MdcCloudSync} />
          <SidebarLink title="Settings" to="/settings" Icon={BisCog} />
        </SidebarGroup>
        <SidebarGroup
          title="Decks"
          action={openAddDeck}
          actionTitle="Add Deck"
          ActionIcon={MdAdd}>
          <DeckList decks={decks} />
        </SidebarGroup>
      </chakra.div>
      <SidebarFooter />
      {/* <AddDeck
        initialValues={{name: ''}}
        isOpen={isAddDeckOpen}
        onClose={onCloseAddDeck}
        onSuccess="redirect"
      /> */}
    </chakra.aside>
  );
};

Sidebar.WIDTH = WIDTH;

export {Sidebar};
