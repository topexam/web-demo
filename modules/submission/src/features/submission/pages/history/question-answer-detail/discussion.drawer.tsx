import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FiSend } from 'react-icons/fi';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const DiscussionDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<Icon as={HiOutlineChatAlt2} w={5} h={5} />}
        variant="ghost"
        colorScheme="blue"
        _focus={{}}
        onClick={onOpen}
      >
        Discusstion (25)
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton _focus={{}} />
            <DrawerHeader borderBottomWidth="1px">Discussion for Question 1</DrawerHeader>
            <DrawerBody>
              <Box>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500" fontSize="lg">
                          An Nguyen Quang
                        </Text>
                        <Text color="gray.300" fontSize="md">
                          @ngquangan
                        </Text>
                      </Box>
                      <Text color="gray.500" fontSize="md">
                        2 hours ago
                      </Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
                <Flex borderBottomWidth="1px" py={3}>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                  <Box flex={1}>
                    <Flex>
                      <Box flex={1}>
                        <Text fontWeight="500">An Nguyen Quang</Text>
                        <Text color="gray.300">@ngquangan</Text>
                      </Box>
                      <Text color="gray.600">2 hours ago</Text>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Flex w="100%">
                <Textarea placeholder="Enter your comment" flex={1} />
                <IconButton
                  icon={<Icon as={FiSend} />}
                  aria-label="Send comment"
                  ml={2}
                  colorScheme="blue"
                  _focus={{}}
                />
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DiscussionDrawer;
