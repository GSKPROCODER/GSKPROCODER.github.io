import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  users: User[];
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addUser: (user: Omit<User, 'id'>) => void;
  removeUser: (id: string) => void;
  updateUser: (id: string, updates: Partial<User>) => void;
}

const defaultUsers: User[] = [
  {
    id: 'admin',
    name: 'Admin',
    email: 'admin@gdg.dev',
    role: 'admin'
  }
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      users: defaultUsers,
      login: (email: string, password: string) => {
        if (email === 'admin@gdg.dev' && password === 'admin') {
          set({ user: defaultUsers[0], isAuthenticated: true });
          return true;
        }
        const user = get().users.find(u => u.email === email);
        if (user) {
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null, isAuthenticated: false }),
      addUser: (userData) => set(state => ({
        users: [...state.users, { ...userData, id: crypto.randomUUID() }]
      })),
      removeUser: (id) => set(state => ({
        users: state.users.filter(user => user.id !== id)
      })),
      updateUser: (id, updates) => set(state => ({
        users: state.users.map(user => 
          user.id === id ? { ...user, ...updates } : user
        )
      }))
    }),
    {
      name: 'auth-storage'
    }
  )
);