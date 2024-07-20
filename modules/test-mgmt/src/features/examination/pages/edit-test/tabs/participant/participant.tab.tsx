import {
  Box,
  Icon,
  Text,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  Avatar,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
} from '@chakra-ui/react';
import {
  HiOutlineLink,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiOutlineClipboardCopy,
} from 'react-icons/hi';
import { RiSave2Fill } from 'react-icons/ri';

import { HeaderTabSection } from '@/components';
import InviteButton from './invite-button';

export const ShareTab = () => {
  return (
    <HeaderTabSection
      title="Participants"
      description="Manage share test"
      footerContent={
        <HStack px={4} py={3} mt={4} justify="flex-end" bg="gray.100">
          <Button size="sm" colorScheme="blue" leftIcon={<Icon as={RiSave2Fill} boxSize={4} />}>
            Save
          </Button>
        </HStack>
      }
    >
      <Box>
        <HStack justify="space-between">
          <Text fontWeight="500">Collaborators</Text>
          <InviteButton />
        </HStack>
        <Table variant="simple" mt={2}>
          <Thead bg="gray.100">
            <Tr>
              <Th>User</Th>
              <Th>Role</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <HStack>
                  <Avatar size="sm" />
                  <Box>
                    <Text>An Nguyen Q.</Text>
                    <Text color="gray.400" fontSize="sm">
                      @ngquangan
                    </Text>
                  </Box>
                </HStack>
              </Td>
              <Td>Owner</Td>
              <Td isNumeric>
                <HStack justify="flex-end">
                  <Button
                    size="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={HiOutlinePencilAlt} />}
                    _focus={{}}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    leftIcon={<Icon as={HiOutlineTrash} />}
                    _focus={{}}
                  >
                    Remove
                  </Button>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Avatar size="sm" />
                  <Box>
                    <Text>User Test</Text>
                    <Text color="gray.400" fontSize="sm">
                      @user-test
                    </Text>
                  </Box>
                </HStack>
              </Td>
              <Td>Editor</Td>
              <Td isNumeric>
                <HStack justify="flex-end">
                  <Button
                    size="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={HiOutlinePencilAlt} />}
                    _focus={{}}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    leftIcon={<Icon as={HiOutlineTrash} />}
                    _focus={{}}
                  >
                    Remove
                  </Button>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Box mt={4}>
        <Text fontWeight="500">Get Link</Text>
        <InputGroup mt={1}>
          <InputLeftAddon children={<Icon as={HiOutlineLink} />} />
          <Input defaultValue="https://topthithu.com/test/123" readOnly={true} />
          <InputRightElement width="5rem" mr={2}>
            <Button h="1.75rem" size="sm" leftIcon={<Icon as={HiOutlineClipboardCopy} />}>
              Copy
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </HeaderTabSection>
  );
};
