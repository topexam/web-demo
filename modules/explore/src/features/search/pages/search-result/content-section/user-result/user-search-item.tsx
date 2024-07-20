import {
  Avatar,
  Text,
  Grid,
  GridItem,
  Icon,
  Box,
  Wrap,
  WrapItem,
  Center,
  HStack,
} from '@chakra-ui/react';
import {
  HiBadgeCheck,
  HiOutlineDocumentDuplicate,
  HiOutlineUserGroup,
  HiUserGroup,
} from 'react-icons/hi';
import { getFullNameFromData } from '@topexam/web.lib.util';
import { IUser, useFileUrl } from '@topexam/web.lib.foundation';

type Props = {
  item: IUser;
};

export const UserSearchItem = ({ item }: Props) => {
  const fileUrl = useFileUrl({ resourceId: item._id, fileId: item.avatar || null });

  const fullName =
    getFullNameFromData({
      first_name: item.first_name,
      last_name: item.last_name,
      middle_name: item.middle_name,
    }) || 'unknown';

  return (
    <Box
      borderWidth={1}
      rounded="lg"
      overflow="hidden"
      cursor="pointer"
      bg="white"
      p={4}
      _hover={{ bg: 'gray.50' }}
    >
      <Grid templateColumns="40px 1fr" templateRows="40px 1fr" columnGap={4} rowGap={1}>
        <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
          <Avatar name={fullName} src={fileUrl} size="40px" w="100%" h="100%" />
        </GridItem>
        <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
          <HStack>
            <Text fontWeight="500" noOfLines={1}>
              {fullName}
            </Text>
            {item.extra_data?.verified && <Icon as={HiBadgeCheck} color="green.500" boxSize={5} />}
          </HStack>
          <Text color="gray.500" fontSize="sm" noOfLines={1}>
            @{item.username}
          </Text>
        </GridItem>
        <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
          <Wrap spacing={4} my={1}>
            <WrapItem>
              <Center>
                <Icon as={HiOutlineUserGroup} mr={2} />
                <Text as="span" fontWeight="500">
                  {item.extra_data?.follower_num ?? 0} followers
                </Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Icon as={HiUserGroup} mr={2} />
                <Text as="span" fontWeight="500">
                  {item.extra_data?.following_num || 0} following
                </Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Icon as={HiOutlineDocumentDuplicate} mr={2} />
                <Text as="span" fontWeight="500">
                  {item.extra_data?.created_test_num || 0} Tests
                </Text>
              </Center>
            </WrapItem>
          </Wrap>
          {item.bio && (
            <Text color="gray.600" mt={1}>
              {item.bio}
            </Text>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};
