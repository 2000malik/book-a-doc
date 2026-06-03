'use client';

import { User } from '@/app/types/users';
import {
  Badge,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from '@chakra-ui/react';


interface Props {
  users: User[];
  onView: (user: User) => void;
}

export const UserTable = ({
  users,
  onView,
}: Props) => {
  return (
    <Table bg="white">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Department</Th>
          <Th>Status</Th>
          <Th />
        </Tr>
      </Thead>

      <Tbody>
        {users.map(user => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.role}</Td>
            <Td>{user.department}</Td>

            <Td>
              <Badge
                colorScheme={
                  user.status === 'Active'
                    ? 'green'
                    : 'red'
                }
              >
                {user.status}
              </Badge>
            </Td>

            <Td>
              <Button
                size="sm"
                onClick={() => onView(user)}
              >
                View
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};