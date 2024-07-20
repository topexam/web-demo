import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
  Icon,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { HiOutlineGlobe, HiOutlinePencilAlt } from 'react-icons/hi';
import { RiArrowDownSFill, RiArchiveFill } from 'react-icons/ri';

import { IPageRouteParams } from '@/types';
import { usePublishExaminationMutation } from '@/features/examination/api';

const PublishBox = () => {
  const navigate = useNavigate();
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();

  const publishExaminationMutation = usePublishExaminationMutation();

  const _handlePublish = () => {
    publishExaminationMutation.mutate(
      { examinationId },
      {
        onSuccess: () => {
          onClose();
          navigate('/examination', { replace: true });
        },
      }
    );
  };

  return (
    <>
      <ButtonGroup isAttached colorScheme="blue">
        <Button leftIcon={<Icon as={HiOutlineGlobe} boxSize={5} />} _focus={{}} onClick={onOpen}>
          Publish
        </Button>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="More actions"
            icon={<Icon as={RiArrowDownSFill} />}
            borderLeft={1}
            borderColor="white"
            borderStyle="groove"
          />
          <MenuList>
            <MenuItem icon={<Icon as={HiOutlinePencilAlt} boxSize={5} />}>Make as Draft</MenuItem>
            <MenuItem icon={<Icon as={RiArchiveFill} boxSize={5} />} color="red.500">
              Archive
            </MenuItem>
          </MenuList>
        </Menu>
      </ButtonGroup>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Publish Examination
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to publish this examination? You can't undo this action
              afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <ButtonGroup spacing={3}>
                <Button ref={cancelRef} onClick={onClose} size="sm" variant="ghost">
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={_handlePublish}
                  size="sm"
                  isLoading={publishExaminationMutation.isPending}
                >
                  Publish
                </Button>
              </ButtonGroup>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default PublishBox;
