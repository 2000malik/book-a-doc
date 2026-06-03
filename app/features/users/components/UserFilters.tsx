'use client';

import {
  HStack,
  Input,
  Select,
} from '@chakra-ui/react';

interface Props {
  search: string;
  role: string;
  status: string;
  onSearchChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export const UserFilters = ({
  search,
  role,
  status,
  onSearchChange,
  onRoleChange,
  onStatusChange,
}: Props) => (
  <HStack spacing={4}>
    <Input
      placeholder="Search users..."
      value={search}
      onChange={e =>
        onSearchChange(e.target.value)
      }
    />

    <Select
      value={role}
      onChange={e =>
        onRoleChange(e.target.value)
      }
      maxW="200px"
    >
      <option value="">All Roles</option>
      <option value="Admin">Admin</option>
      <option value="Doctor">Doctor</option>
      <option value="Staff">Staff</option>
    </Select>

    <Select
      value={status}
      onChange={e =>
        onStatusChange(e.target.value)
      }
      maxW="200px"
    >
      <option value="">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </Select>
  </HStack>
);