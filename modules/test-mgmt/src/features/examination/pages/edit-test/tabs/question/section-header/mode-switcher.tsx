import { Button, Icon, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { MdListAlt, MdPictureAsPdf } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { EExaminationMode } from '@topexam/web.lib.foundation';

import { useExaminationItem, useUpdateExamination } from '@/features/examination/api';
import { IPageRouteParams } from '@/types';

const MODE_LIST = [
  {
    key: EExaminationMode.NORMAL,
    title: 'Normal',
    icon: MdListAlt,
  },
  {
    key: EExaminationMode.PDF,
    title: 'PDF',
    icon: MdPictureAsPdf,
  },
];

const ModeSwitcher = () => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;
  const examinationItemQuery = useExaminationItem({ examinationId });
  const updateExaminationMutation = useUpdateExamination();

  const _handleSwitch = (mode: EExaminationMode) => {
    updateExaminationMutation.mutate({
      examinationId,
      payload: { mode },
    });
  };

  const examinationMode = useMemo(() => {
    return MODE_LIST.find((it) => it.key === examinationItemQuery.data?.mode);
  }, [examinationItemQuery.data]);

  return (
    <Menu isLazy>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            leftIcon={<Icon as={examinationMode?.icon} boxSize={4} />}
            rightIcon={<Icon as={RiArrowDownSFill} boxSize={5} />}
            size="sm"
            colorScheme="blue"
            variant="outline"
            isLoading={examinationItemQuery.isLoading}
          >
            {examinationMode?.title}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Select Mode">
              {MODE_LIST.map((it) => (
                <MenuItem
                  key={it.key}
                  icon={<Icon as={it.icon} boxSize={4} />}
                  fontSize="sm"
                  onClick={() => _handleSwitch(it.key)}
                >
                  {it.title}
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default ModeSwitcher;
