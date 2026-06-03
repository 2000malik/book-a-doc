'use client';

import { User } from '@/app/types/users';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
} from '@chakra-ui/react';


interface Props {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailsModal = ({
  user,
  isOpen,
  onClose,
}: Props) => {
  if (!user) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          User Details
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody pb={6}>
          <VStack align="start">
            <Text>
              <b>ID:</b> {user.id}
            </Text>

            <Text>
              <b>Name:</b> {user.name}
            </Text>

            <Text>
              <b>Email:</b> {user.email}
            </Text>

            <Text>
              <b>Role:</b> {user.role}
            </Text>

            <Text>
              <b>Department:</b>{' '}
              {user.department}
            </Text>

            <Text>
              <b>Status:</b> {user.status}
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};