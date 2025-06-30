import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import type { User } from '../types/user';
import { specialUsers } from '../data/users';

type AuthContextType = {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const navigate  = useNavigate();

  const login = (username: string) => {
    const specialUser = specialUsers.find((u) => u.username === username);

    const user = specialUser ?? {
      username,
      role: 'user',
    };

    setUser(user);
    navigate('/profile', { replace: true });
  }

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  }

  const auth = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

 export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthGuard({ children, redirectTo = "/"}: { children: React.ReactNode, redirectTo?: string }) {
  const { user } = useAuth();

  if (!user) {
    return (
      <Navigate to={redirectTo} />
    )
  }

  return children;
}

