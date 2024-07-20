import {
  Container,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  RiBarChartBoxFill,
  RiDiscussFill,
  RiDraftFill,
  RiInformationFill,
  RiListSettingsFill,
  RiFileCopy2Fill,
  RiStarFill,
  RiTeamFill,
  RiTimerFlashFill,
} from 'react-icons/ri';

import {
  InformationTab,
  SettingTab,
  ShareTab,
  RealtimeTab,
  SubmissionTab,
  DiscussionTab,
  RatingTab,
  QuestionTab,
} from './tabs';
import { EditTestHeader } from './components';

const TAB_LIST = [
  {
    key: 'information',
    icon: RiInformationFill,
    title: 'Information',
    content: <InformationTab />,
  },
  {
    key: 'setting',
    icon: RiListSettingsFill,
    title: 'Settings',
    content: <SettingTab />,
  },

  {
    key: 'share',
    icon: RiTeamFill,

    title: 'Participants',
    content: <ShareTab />,
  },
  {
    key: 'questions',
    icon: RiFileCopy2Fill,
    title: 'Questions',
    content: <QuestionTab />,
  },
  {
    key: 'real-time',
    icon: RiTimerFlashFill,
    title: 'Real-time',
    content: <RealtimeTab />,
  },
  {
    key: 'analytics',
    icon: RiBarChartBoxFill,
    title: 'Analytics',
    content: <Text p={4}>Analytics</Text>,
  },
  {
    key: 'submissions',
    icon: RiDraftFill,
    title: 'Submissions',
    content: <SubmissionTab />,
  },
  {
    key: 'discussion',
    icon: RiDiscussFill,
    title: 'Discussions',
    content: <DiscussionTab />,
  },
  {
    key: 'rating',
    icon: RiStarFill,
    title: 'Ratings',
    content: <RatingTab />,
  },
];

export const EditTestPage = () => {
  const tabOrientation = useBreakpointValue<'vertical' | 'horizontal'>({
    base: 'horizontal',
    lg: 'vertical',
  });

  const _renderTabList = () => {
    return TAB_LIST.map((tabItem) => (
      <Tab
        key={tabItem.key}
        borderWidth={0}
        borderRightWidth={{ base: 0, lg: 3 }}
        borderBottomWidth={{ base: 3, lg: 0 }}
        borderColor="gray.100"
        _focus={{}}
        _selected={{ bg: 'blue.50', color: 'blue.500', borderColor: 'blue.500' }}
      >
        <HStack w="100%" id={tabItem.key}>
          <Icon as={tabItem.icon} boxSize={5} />
          <Text whiteSpace="nowrap">{tabItem.title}</Text>
        </HStack>
      </Tab>
    ));
  };

  return (
    <Container maxWidth="1400px" py={8} px={4} mx="auto">
      <EditTestHeader />
      <Tabs orientation={tabOrientation} defaultIndex={0} mt={4}>
        <TabList minW="200px" overflowX="auto" overflowY="hidden" minH="50px" borderWidth={0}>
          {_renderTabList()}
        </TabList>
        <TabPanels
          shadow="base"
          bg="white"
          rounded="base"
          ml={{ base: 0, lg: 4 }}
          mt={{ base: 4, lg: 0 }}
        >
          {TAB_LIST.map((it) => (
            <TabPanel p={0} h="full" key={it.key}>
              {it.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};
