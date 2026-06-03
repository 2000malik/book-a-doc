export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Doctor' | 'Staff';
  department: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
}