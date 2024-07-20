import { Box, HStack, Icon, Button, Text } from '@chakra-ui/react';
import { RiRefreshLine, RiSettings4Fill } from 'react-icons/ri';
import ModeSwitcher from './mode-switcher';

export const SectionHeader = () => {
  return (
    <HStack>
      <Box flex={1}>
        <HStack spacing={3}>
          <Text fontSize="lg" fontWeight="500">
            Questions
          </Text>
          <HStack color="blue.500" fontSize="sm" spacing={1}>
            <Icon as={RiRefreshLine} />
            <Text>Saved</Text>
          </HStack>
        </HStack>
        <Text color="gray.500" fontSize="sm">
          Manage all questions for test
        </Text>
      </Box>
      <HStack>
        <ModeSwitcher />
        <Button leftIcon={<Icon as={RiSettings4Fill} />} size="sm">
          Actions
        </Button>
      </HStack>
    </HStack>
  );
};
