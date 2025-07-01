import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { specialUsers } from '../data/users';
import type { User } from '../types/user';

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

/**
 * AuthProvider component to manage user authentication state.
 *
 * When a user logs in, it sets the user state and redirects them to the page they were trying to access before logging in. If this state does not exist, it redirects to the last visited page.
 *
 * @returns ReactNode
 */
export function AuthProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [user, setUser] = React.useState<User | null>(null)
  const navigate  = useNavigate();
  const location = useLocation();

  const login = (username: string) => {
    const specialUser = specialUsers.find((u) => u.username === username);

    const user = specialUser ?? {
      username,
      role: 'user',
    };

    setUser(user);
    navigate(location?.state?.from || -1);
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

 export function useAuth(): AuthContextType {
  return React.useContext(AuthContext);
}

/**
 * Component (Guard) to protect routes that require authentication. This Guard stores the protected route the user was trying to visit in the `state.from`.
 *
 * @param redirectTo - The path to redirect the user if they are not authenticated. Defaults to "/login".
 * @returns ReactNode
 */
export function AuthGuard({ children, redirectTo = "/login"}: { children: React.ReactNode, redirectTo?: string }): React.ReactNode {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={redirectTo} state={{ from: location.pathname }} />
    )
  }

  return children;
}

