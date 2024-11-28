export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const demoUsers: User[] = [
  {
    id: '1',
    email: 'demo@gdg.dev',
    name: 'Demo User',
  },
];