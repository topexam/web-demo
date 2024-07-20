import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Icon,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react';
import {
  HiOutlineCurrencyDollar,
  HiOutlineDocumentReport,
  HiOutlineExclamation,
} from 'react-icons/hi';
import { MdOutlineBookmarks } from 'react-icons/md';

import { TestCreatedTab, TestBoughtTab, TestSavedTab, TestExpiredTab } from './tabs';

const TAB_LIST = [
  {
    key: 'test-created',
    icon: HiOutlineDocumentReport,
    title: 'Test Created',
    content: <TestCreatedTab />,
  },
  {
    key: 'test-bought',
    icon: HiOutlineCurrencyDollar,
    title: 'Test Bought',
    content: <TestBoughtTab />,
  },
  {
    key: 'test-saved',
    icon: MdOutlineBookmarks,
    title: 'Test Saved',
    content: <TestSavedTab />,
  },
  {
    key: 'test-expired',
    icon: HiOutlineExclamation,
    title: 'Test Expired',
    content: <TestExpiredTab />,
  },
];

export const ManageTestPage = () => {
  const tabOrientation = useBreakpointValue<'vertical' | 'horizontal'>({
    base: 'horizontal',
    lg: 'vertical',
  });

  return (
    <Box maxWidth="1400px" py={8} px={4} mx="auto">
      <Box mb={8}>
        <Text fontSize="2xl" fontWeight="600">
          Examination Management
        </Text>
        <Text color="gray.500" maxW="100ch">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
      </Box>
      <Tabs orientation={tabOrientation}>
        <TabList minW="200px" overflowX="auto" overflowY="hidden" minH="50px" borderWidth={0}>
          {TAB_LIST.map((tabItem) => (
            <Tab
              key={tabItem.key}
              borderWidth={0}
              borderRightWidth={{ base: 0, lg: 3 }}
              borderBottomWidth={{ base: 3, lg: 0 }}
              borderColor="gray.100"
              _focus={{}}
              _selected={{ bg: 'blue.50', color: 'blue.500', borderColor: 'blue.500' }}
            >
              <HStack w="full" id={tabItem.key}>
                <Icon as={tabItem.icon} boxSize={5} />
                <Text whiteSpace="nowrap">{tabItem.title}</Text>
              </HStack>
            </Tab>
          ))}
        </TabList>
        <TabPanels ml={{ base: 0, lg: 4 }} mt={{ base: 4, lg: 0 }} bg="white" rounded="base">
          {TAB_LIST.map((tabItem) => (
            <TabPanel p={0}>{tabItem.content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
