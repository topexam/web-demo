import { Avatar, Center, Divider, Grid, GridItem, HStack, Spacer, Text } from '@chakra-ui/react';

export const ActivityItemFull = () => {
  return (
    <Grid templateColumns="40px 1fr" templateRows="40px 1fr" columnGap="2" rowGap="3" mb="3">
      <GridItem colSpan={1} rowStart={1} rowEnd={2}>
        <Avatar size="40px" />
      </GridItem>
      <GridItem colSpan={1} rowStart={1} rowEnd={2}>
        <HStack>
          <Text fontWeight="500">Felix Nguyen</Text>
          <Spacer />
          <Text color="gray.400" fontSize="sm">
            6h ago
          </Text>
        </HStack>
        <Text color="gray.500" fontSize="xs">
          @im_felixng
        </Text>
      </GridItem>
      <GridItem colSpan={1} rowStart={2} rowEnd={3}>
        <Center width="100%" h="100%">
          <Divider orientation="vertical" borderLeftWidth="3px" />
        </Center>
      </GridItem>
      <GridItem colSpan={1} rowStart={2} rowEnd={3}>
        <Text color="gray.600" fontSize="sm">
          Đã tạo đề thi <strong>Demo De Thi Dai Hoc</strong>
        </Text>
      </GridItem>
    </Grid>
  );
};
