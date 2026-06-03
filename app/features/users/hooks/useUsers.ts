'use client';

import { useMemo, useState } from 'react';
import { mockUsers } from '../data/mockUsers';

export const useUsers = () => {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');

  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user => {
      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesRole =
        !role || user.role === role;

      const matchesStatus =
        !status ||
        user.status === status;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }, [search, role, status]);

  return {
    filteredUsers,
    search,
    role,
    status,
    setSearch,
    setRole,
    setStatus,
  };
};