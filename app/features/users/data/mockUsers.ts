
import { User } from "@/app/types/users";

const roles = ['Admin', 'Doctor', 'Staff'] as const;
const departments = [
  'Operations',
  'Technology',
  'Human Resources',
  'Finance',
];

export const mockUsers: User[] = Array.from(
  { length: 50 },
  (_, i) => ({
    id: `USR-${String(i + 1).padStart(3, '0')}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@streampay.com`,
    role: roles[i % roles.length],
    department: departments[i % departments.length],
    status: i % 4 === 0 ? 'Inactive' : 'Active',
    createdAt: '2025-01-01',
  })
);