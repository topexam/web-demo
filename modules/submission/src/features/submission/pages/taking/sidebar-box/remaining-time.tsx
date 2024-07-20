import { Center, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useInterval } from 'react-use';

type Props = {
  time: number;
};

const RemainingTime = ({ time }: Props) => {
  const [secondTime, setSecondTime] = useState(() => time * 60);
  useInterval(() => setSecondTime((v) => v - 1), 1000);

  const second = secondTime % 60;
  const minute = (secondTime - second) / 60;

  const isWarningTime = secondTime <= time * 60 * 0.1;

  return (
    <Center
      bg={isWarningTime ? 'red.50' : 'blue.50'}
      borderColor={isWarningTime ? 'red.300' : 'blue.300'}
      p={2}
      borderRadius="md"
      borderWidth={2}
    >
      <Text fontWeight="700" fontSize="lg" color={isWarningTime ? 'red.500' : 'blue.500'}>
        {`${minute}`.padStart(2, '0')} : {`${second}`.padStart(2, '0')}
      </Text>
    </Center>
  );
};

export default RemainingTime;
