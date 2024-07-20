import { Box, InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const SearchBox = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (location.pathname.startsWith('/search')) {
      navigate(
        {
          pathname: '/search',
          search: `?${createSearchParams({ q: searchParams.get('q') || '' })}`,
        },
        { replace: true }
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (!location.pathname.startsWith('/search')) {
      if (searchInputRef.current) {
        searchInputRef.current.value = '';
      }
    }
  }, [location.pathname]);

  return (
    <Box px={{ base: 0, md: 3 }} py={1} maxW={{ base: 'auto', md: '500px' }} w="full">
      <InputGroup borderColor="gray.600" rounded="md" bg="gray.600">
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={RiSearch2Line} color="gray.300" />}
        />
        <Input
          ref={searchInputRef}
          placeholder="Search..."
          color="white"
          defaultValue={searchParams.get('q') || ''}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              const value = e.currentTarget?.value?.trim() ?? '';
              if (value) {
                navigate(
                  { pathname: '/search', search: `?${createSearchParams({ q: value })}` },
                  { replace: true }
                );
              }
            }
          }}
        />
      </InputGroup>
    </Box>
  );
};
