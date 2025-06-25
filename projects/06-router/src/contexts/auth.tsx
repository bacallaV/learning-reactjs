import React from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  username: string;
}
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
    setUser({
      username,
    });
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
