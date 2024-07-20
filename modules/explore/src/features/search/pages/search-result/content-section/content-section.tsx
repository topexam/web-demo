import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Button,
  Icon,
  Center,
} from '@chakra-ui/react';
import { HiArrowCircleDown } from 'react-icons/hi';
import { ExaminationResult } from './examination-result';
import { ChallengeSearchItem, PracticeSearchItem } from './search-item';
import { UserResult } from './user-result';

export const ContentSection = () => {
  return (
    <Tabs colorScheme="green" isLazy>
      <TabList>
        <Tab _focus={{}}>Examination</Tab>
        <Tab _focus={{}}>Practice</Tab>
        <Tab _focus={{}}>Challenge</Tab>
        <Tab _focus={{}}>User</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ExaminationResult />
        </TabPanel>
        <TabPanel>
          <SimpleGrid columns={{ xl: 3 }} spacing={4}>
            <PracticeSearchItem />
            <PracticeSearchItem />
            <PracticeSearchItem />
            <PracticeSearchItem />
          </SimpleGrid>
          <Center>
            <Button
              leftIcon={<Icon as={HiArrowCircleDown} w={5} h={5} />}
              colorScheme="teal"
              variant="outline"
              _focus={{}}
              mt={4}
            >
              Loadmore
            </Button>
          </Center>
        </TabPanel>
        <TabPanel>
          <SimpleGrid columns={{ xl: 2 }} spacing={4}>
            <ChallengeSearchItem />
            <ChallengeSearchItem />
            <ChallengeSearchItem />
            <ChallengeSearchItem />
          </SimpleGrid>
          <Center>
            <Button
              leftIcon={<Icon as={HiArrowCircleDown} w={5} h={5} />}
              colorScheme="teal"
              variant="outline"
              _focus={{}}
              mt={4}
            >
              Loadmore
            </Button>
          </Center>
        </TabPanel>
        <TabPanel>
          <UserResult />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
