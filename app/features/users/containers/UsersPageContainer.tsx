'use client';

import {
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import { useState } from 'react';


import { mockUsers } from '../data/mockUsers';

import { UserFilters } from '../components/UserFilters';
import { UserSummaryCards } from '../components/UserSummaryCards';
import { UserTable } from '../components/UserTable';
import { UserDetailsModal } from '../components/UserDetailsModal';

import { useUsers } from '../hooks/useUsers';
import { User } from '@/app/types/users';

export const UsersPageContainer = () => {
  const {
    filteredUsers,
    search,
    role,
    status,
    setSearch,
    setRole,
    setStatus,
  } = useUsers();

  const [selectedUser, setSelectedUser] =
    useState<User | null>(null);

  const { isOpen, onOpen, onClose } =
    useDisclosure();

  const openUser = (user: User) => {
    setSelectedUser(user);
    onOpen();
  };

  return (
    <VStack
      spacing={6}
      align="stretch"
    >
      <UserSummaryCards
        users={mockUsers.length}
        active={
          mockUsers.filter(
            x => x.status === 'Active'
          ).length
        }
        doctors={
          mockUsers.filter(
            x => x.role === 'Doctor'
          ).length
        }
        admins={
          mockUsers.filter(
            x => x.role === 'Admin'
          ).length
        }
      />

      <UserFilters
        search={search}
        role={role}
        status={status}
        onSearchChange={setSearch}
        onRoleChange={setRole}
        onStatusChange={setStatus}
      />

      <UserTable
        users={filteredUsers}
        onView={openUser}
      />

      <UserDetailsModal
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
      />
    </VStack>
  );
};