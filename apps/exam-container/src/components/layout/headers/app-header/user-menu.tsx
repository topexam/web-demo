import {
  Text,
  Avatar,
  Box,
  Button,
  Divider,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Tag,
  HStack,
} from '@chakra-ui/react';
import {
  RiBankCardFill,
  RiCoinFill,
  RiFileCopy2Fill,
  RiLogoutBoxRLine,
  RiQrScan2Line,
  RiUserFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCurrentAuthUser } from '@topexam/web.lib.util';

export const UserMenu = () => {
  const { logout } = useAuth0();
  const currentUser = useCurrentAuthUser();
  // const avatarUrl = useFileUrl({
  //   resourceId: 'user_id',
  //   fileId: currentUser?.user_metadata?.avatar || null,
  // });

  const _handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <HStack align="center">
      <Menu>
        {({ onClose }) => (
          <>
            <MenuButton as={Avatar} cursor="pointer" rounded="full" src={currentUser?.picture} />
            <MenuList maxW="300px">
              <Box p="2">
                <HStack>
                  <Avatar src={currentUser?.picture} />
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
              <Divider />
              <MenuGroup title="Account">
                <Link to="/user/my-profile">
                  <MenuItem icon={<Icon as={RiUserFill} w={5} h={5} />}>My Profile</MenuItem>
                </Link>
              </MenuGroup>
              <Divider />
              <MenuGroup title="Management">
                <Link to="/mgmt/examination">
                  <MenuItem icon={<Icon as={RiFileCopy2Fill} w={5} h={5} />}>
                    Test Management
                  </MenuItem>
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
              <MenuItem
                color="red.500"
                onClick={_handleLogout}
                icon={<Icon as={RiLogoutBoxRLine} w={5} h={5} />}
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
