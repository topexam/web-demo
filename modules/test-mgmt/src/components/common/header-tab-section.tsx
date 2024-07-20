import { PropsWithChildren } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

type IDirection = 'vertical' | 'horizontal';
type IStackDirection = 'column' | 'row';

const directionMapping: Record<IDirection, IStackDirection> = {
  vertical: 'column',
  horizontal: 'row',
};

type Props = PropsWithChildren<{
  title: string;
  description: string;
  direction?: IDirection;
  rightContent?: JSX.Element;
  footerContent?: JSX.Element;
}>;

export const HeaderTabSection = ({
  title,
  description,
  children,
  footerContent,
  direction = 'vertical',
}: Props) => {
  return (
    <Stack direction={{ md: directionMapping[direction], base: 'column' }}>
      <Box alignItems="flex-start" p={4}>
        <Text fontSize="xl" fontWeight="500">
          {title}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
      </Box>
      <Box h="100%" flex={1}>
        <Box p={4}>{children}</Box>
        <Box>{footerContent}</Box>
      </Box>
    </Stack>
  );
};
