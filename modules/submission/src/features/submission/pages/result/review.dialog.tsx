import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  Icon,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { HiOutlineHome, HiStar } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { ItemStyles, Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
type Props = {
  examinationId: string;
};

const customRatingStyles: ItemStyles = {
  itemShapes: <Icon as={HiStar} />,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9',
};

const ReviewDialog = ({ examinationId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const cancelRef = useRef<any>();
  const toast = useToast();
  return (
    <>
      <Button
        mr={4}
        leftIcon={<Icon as={HiOutlineHome} w={5} h={5} color="white" />}
        colorScheme="blue"
        color="white"
        _focus={{}}
        onClick={onOpen}
      >
        Go Home
      </Button>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Review Examination
            </AlertDialogHeader>
            <AlertDialogBody>
              <FormControl id="rate">
                <Rating itemStyles={customRatingStyles} value={2} />
              </FormControl>
              <FormControl id="content" mt={3}>
                <Textarea placeholder="Input your review" />
              </FormControl>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Link to={`/examination/${examinationId}`}>
                <Button ref={cancelRef} onClick={onClose} mr={3} _focus={{}} variant="ghost">
                  Go Home
                </Button>
              </Link>
              <Button
                colorScheme="blue"
                _focus={{}}
                onClick={() => {
                  toast({
                    title: 'Review sent.',
                    description: 'Thanks for your review.',
                    status: 'success',
                    duration: 3000,
                    position: 'top',
                  });
                  navigate(`/examination/${examinationId}`, { replace: true });
                }}
              >
                Review
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ReviewDialog;
