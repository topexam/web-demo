import {
  Avatar,
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';

const SubmissionItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="md"
        p={3}
        cursor="pointer"
        _hover={{
          bg: 'gray.50',
        }}
        bg={isOpen ? 'gray.50' : 'transparent'}
        onClick={onOpen}
      >
        <Box fontSize="32px" fontWeight="500" color="gray.500">
          #1
        </Box>
        <HStack>
          <Avatar />
          <Box>
            <Text>An Nguyen Quang</Text>
            <Text color="gray.400" fontSize="sm">
              @ngquangan
            </Text>
          </Box>
          <Spacer />
          <Box ml={4} textAlign="center">
            <CircularProgress value={(15 * 100) / 20} color="green.400" size="75px">
              <CircularProgressLabel>15/20</CircularProgressLabel>
            </CircularProgress>
          </Box>
        </HStack>
        <HStack mt={2}>
          <Text color="gray.500" fontSize="sm">
            Submitted on 20/02/2021 15:00:00
          </Text>
          <Spacer />
          <Text color="blue.500" fontWeight="500">
            20:30:11
          </Text>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submission Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Avatar />
              <Box>
                <Text>An Nguyen Quang</Text>
                <Text color="gray.400" fontSize="sm">
                  @ngquangan
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text>
                  <Text as="span" color="green.500" fontWeight="500">
                    15/20
                  </Text>
                  &nbsp;
                  <Text as="span" color="blue.500">
                    on 20:30:11
                  </Text>
                </Text>
                <Text color="gray.500" fontSize="sm">
                  20/02/2021 15:00:00
                </Text>
              </Box>
            </HStack>
            <Text mt={4}>Detail</Text>
            <SimpleGrid minChildWidth="100px" spacing={2} mt={2}>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="green.500"
              >
                1. A
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="red.500"
              >
                1.{' '}
                <Text as="span" textDecoration="line-through">
                  B
                </Text>{' '}
                <Text as="span" color="green.500">
                  B
                </Text>
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="red.500"
              >
                1. <Text as="span">__</Text>{' '}
                <Text as="span" color="green.500">
                  B
                </Text>
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="green.500"
              >
                1. A
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="green.500"
              >
                1. A
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="green.500"
              >
                1. A
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="green.500"
              >
                1. A
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                py={1}
                px={3}
                fontWeight="500"
                color="green.500"
              >
                1. A
              </Box>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubmissionItem;
