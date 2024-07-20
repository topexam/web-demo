import { useAuth0 } from '@auth0/auth0-react';
import {
  Text,
  Avatar,
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Tag,
  HStack,
  MenuDivider,
} from '@chakra-ui/react';
import {
  RiBankCardFill,
  RiCoinFill,
  RiCompassLine,
  RiLogoutBoxRLine,
  RiQrScan2Line,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useCurrentAuthUser } from '@topexam/web.lib.util';

export const UserMenu = () => {
  const { logout } = useAuth0();
  const currentUser = useCurrentAuthUser();

  return (
    <HStack align="center">
      <Menu>
        {({ onClose }) => (
          <>
            <MenuButton
              as={Avatar}
              src={currentUser?.picture}
              rounded="full"
              borderWidth={1}
              borderColor="gray.400"
              cursor="pointer"
            />
            <MenuList>
              <Box p="2">
                <HStack>
                  <Avatar src={currentUser?.picture} size="md" />
                  <Box flex={1} minW="0">
                    <Text as="span" fontWeight="500" noOfLines={1}>
                      {currentUser?.name || '--'}
                    </Text>
                    <Text color="gray.500" fontSize="sm" noOfLines={1}>
                      @{currentUser?.nickname || '--'}
                    </Text>
                  </Box>
                </HStack>
                <HStack align="center" mt={3} mb={2}>
                  <Tag colorScheme="yellow" flex={1} justifyContent="center">
                    <Icon as={RiCoinFill} color="yellow.500" mr={2} />
                    <Text as="span" color="yellow.500" fontWeight="500" fontSize="sm">
                      300 Coin
                    </Text>
                  </Tag>
                  <Link to="/payment">
                    <Button
                      flex={1}
                      onClick={onClose}
                      colorScheme="teal"
                      variant="ghost"
                      _focus={{}}
                      leftIcon={<Icon as={RiBankCardFill} w={5} h={5} />}
                      size="xs"
                    >
                      My Wallet
                    </Button>
                  </Link>
                </HStack>
              </Box>
              <MenuDivider />
              <MenuGroup title="Ecosystem">
                <Link to="/">
                  <MenuItem icon={<Icon as={RiCompassLine} w={5} h={5} />}>Explore</MenuItem>
                </Link>
                <Link to="/score/folder">
                  <MenuItem icon={<Icon as={RiQrScan2Line} w={5} h={5} />} isDisabled={false}>
                    Score Management
                    <Tag colorScheme="blue" ml={2} size="sm">
                      PRO
                    </Tag>
                  </MenuItem>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuItem
                icon={<Icon as={RiLogoutBoxRLine} w={5} h={5} />}
                color="red.500"
                onClick={() => logout()}
              >
                Logout
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </HStack>
  );
};
