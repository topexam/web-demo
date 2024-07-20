import React from 'react';

import { Box, HStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import { NAV_MENU_LIST } from './constant';

type Props = {
  showNav: boolean;
};

export const NavMenu: React.FC<Props> = ({ showNav }) => {
  const location = useLocation();
  if (!showNav) return null;

  const _renderNavMenuList = () => {
    return NAV_MENU_LIST.map((navItem) => {
      const isActive = location.pathname == navItem.link;
      return (
        <Link to={navItem.link} key={navItem.link}>
          <Box
            px="3"
            py="1"
            borderRadius="md"
            cursor="pointer"
            _hover={{
              bg: 'gray.600',
              color: 'gray.100',
            }}
            bg={isActive ? 'gray.600' : 'transparent'}
            color={isActive ? 'gray.100' : 'white'}
          >
            {navItem.title}
          </Box>
        </Link>
      );
    });
  };

  return <HStack py="2">{_renderNavMenuList()}</HStack>;
};
